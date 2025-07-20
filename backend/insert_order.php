<?php
// // Tangani CORS untuk semua jenis request
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     // Kirim semua header yang diperlukan untuk preflight
//     header("Access-Control-Allow-Origin: http://localhost:5173");
//     header("Access-Control-Allow-Headers: Content-Type, Authorization");
//     header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
//     header("Content-Type: application/json; charset=UTF-8");
//     http_response_code(200);
//     exit;
// }

// // Header CORS utama untuk request POST/GET
// header("Access-Control-Allow-Origin: http://localhost:5173");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// header("Content-Type: application/json; charset=UTF-8");


// // === Tampilkan error untuk debugging ===
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);




// // === Ambil dan decode data JSON ===
// $data = json_decode(file_get_contents("php://input"), true);

// if (!$data) {
//     echo json_encode(["success" => false, "message" => "No data received"]);
//     exit;
// }

// // === Ambil data form ===
// $name      = $data["name"] ?? '';
// $email     = $data["email"] ?? '';
// $wa        = $data["wa"] ?? '';
// $address   = $data["address"] ?? '';
// $location  = $data["location"] ?? '';
// $checkIn   = $data["checkIn"] ?? '';
// $checkOut  = $data["checkOut"] ?? '';
// $guest     = $data['guest'] ?? '';
// $message   = $data["message"] ?? '';

// // === Koneksi database ===
// $conn = new mysqli("localhost", "root", "", "tour_booking");

// if ($conn->connect_error) {
//     echo json_encode(["success" => false, "message" => "Database connection failed"]);
//     exit;
// }

// // === Siapkan dan jalankan query ===
// // Pastikan nama kolom sesuai di database. Ganti 'addres' jika typo.
// $sql = "INSERT INTO orders (name, email, wa, address, location, checkIn, checkOut, guest, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
// $stmt = $conn->prepare($sql);

// if (!$stmt) {
//     echo json_encode(["success" => false, "message" => "Prepare failed: " . $conn->error]);
//     exit;
// }

// if (!$stmt->bind_param("sssssssss", $name, $email, $wa, $address, $location, $checkIn, $checkOut, $guest, $message)) {
//     echo json_encode(["success" => false, "message" => "Bind failed: " . $stmt->error]);
//     exit;
// }

// if ($stmt->execute()) {
//     echo json_encode(["success" => true, "message" => "Order saved successfully"]);
//     http_response_code(201);
//     header('Content-Type: application/json');
// } else {
//     echo json_encode(["success" => false, "message" => "Failed to save order: " . $stmt->error]);
//     http_response_code(400);
//     header('Content-Type: application/json');
// }

// $stmt->close();
// $conn->close();
?>
