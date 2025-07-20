<?php
// Tangani CORS untuk semua jenis request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
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
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// === Tampilkan error untuk debugging ===
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);




require_once 'db_connection.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

function authenticateAdmin($db) {
    if (!isset($_SERVER['HTTP_AUTHORIZATION'])) {
        http_response_code(401);
        exit(json_encode(['error' => 'Token tidak ditemukan']));
    }

    $token = str_replace('Bearer ', '', $_SERVER['HTTP_AUTHORIZATION']);
    $user = json_decode(base64_decode($token), true);

    $query = "SELECT role FROM admin WHERE id = ?";
    $stmt = $db->prepare($query);
    $stmt->execute([$user['id']]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$result || $result['role'] !== 'admin') {
        http_response_code(403);
        exit(json_encode(['error' => 'Akses ditolak']));
    }

    return $user;
}
?>