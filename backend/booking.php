<?php

ob_start();

// Tangani CORS untuk semua jenis request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Kirim semua header yang diperlukan untuk preflight
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Content-Type: application/json; charset=UTF-8");
    http_response_code(200);
    exit;
}

// Header CORS utama untuk request POST/GET
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");


// === Tampilkan error untuk debugging ===
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json");
require_once 'db_connection.php';

$data = json_decode(file_get_contents("php://input"), true);

// Validasi input wajib
$requiredFields = [
    'customers' => ['name', 'email', 'phone'],
    'orders' => ['tour_id', 'total_price'],
    'payments' => ['payment_method']
];

foreach ($requiredFields as $section => $fields) {
    foreach ($fields as $field) {
        if (empty($data[$section][$field])) {
            http_response_code(400);
            die(json_encode(['error' => "Field $field wajib diisi"]));
        }
    }
}

try {
    $db = (new Database())->getConnection();
    $db->beginTransaction();

    // 1. Simpan data user (tanpa password karena guest)
    $userQuery = "INSERT INTO customers (name, email, phone, address) 
                  VALUES (?, ?, ?, ?)";
    $userStmt = $db->prepare($userQuery);
    $userStmt->execute([
        $data['customers']['name'],
        $data['customers']['email'],
        $data['customers']['phone'],
        $data['customers']['address'] ?? null
    ]);
    $userId = $db->lastInsertId();

    // 2. Simpan order (booking_status default 'pending')
    $orderQuery = "INSERT INTO orders 
                  (user_id, tour_id, total_price, booking_status, notes)
                  VALUES (?, ?, ?, 'pending', ?)";
    $orderStmt = $db->prepare($orderQuery);
    $orderStmt->execute([
        $userId,
        $data['orders']['tour_id'],
        $data['orders']['total_price'],
        $data['orders']['notes'] ?? null
    ]);
    $orderId = $db->lastInsertId();

    // 3. Simpan pembayaran (status default 'pending', payment_date otomatis)
    $paymentQuery = "INSERT INTO payments 
                    (order_id, payment_method, amount_paid, payment_proof, status)
                    VALUES (?, ?, ?, ?, 'pending')";
    $paymentStmt = $db->prepare($paymentQuery);
    $paymentStmt->execute([
        $orderId,
        $data['payments']['payment_method'],
        $data['orders']['total_price'],
        $data['payments']['payment_proof'] ?? null
    ]);

    $db->commit();
    
    ob_end_clean();
    echo json_encode([
        'success' => true,
        'booking_id' => $orderId
    ]);
} catch (PDOException $e) {
    if ($db && $db->inTransaction()) {
        $db->rollBack();
    }
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}catch (PDOException $e) {
    $db->rollBack();
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}
?>