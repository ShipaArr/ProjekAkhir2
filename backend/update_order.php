<?php
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

// Konfigurasi koneksi database
$host = 'localhost';
$user = 'root';
$pass = ''; // Kosongkan jika tidak ada password
$dbname = 'tour_booking';


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$conn = new mysqli($host, $user, $pass, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Koneksi ke database gagal: " . $conn->connect_error]);
    exit;
}

// Ambil data JSON dari body request
$rawInput = file_get_contents("php://input");

if (!$rawInput) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Tidak ada data yang dikirim"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['customers_id'])) {
    echo json_encode(["success" => false, "message" => "ID tidak ditemukan di request"]);
    exit;
}

// Ambil nilai-nilai dari request
$customers_id = $data["customers_id"];
$name = $data["name"];
$email = $data["email"];
$phone = $data["phone"];

// Cek apakah ID ada di database
$check = $conn->query("SELECT customers_id FROM customers WHERE customers_id = '$customers_id'");

if ($check->num_rows === 0) {
    http_response_code(404);
    echo json_encode(["success" => false, "message" => "Data tidak ditemukan"]);
    exit;
}

// Update data
$query = "UPDATE customers SET 
            name = '$name',
            email = '$email',
            phone = '$phone'
          WHERE customers_id = '$customers_id'";

$result = $conn->query($query);

if (!$result) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Gagal update: " . $conn->error]);
    exit;
}

if ($conn->affected_rows > 0) {
    echo json_encode(["success" => true, "message" => "Data berhasil diupdate"]);
} else {
    echo json_encode(["success" => true, "message" => "Data sudah sesuai, tidak ada perubahan"]);
}
?>
