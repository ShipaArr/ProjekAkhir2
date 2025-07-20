<?php
include 'db_connection.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$user = "root";
$password = ""; // sesuaikan kalau ada
$database = "tour_booking"; // GANTI dengan nama database kamu


$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

if (isset($_GET['customers_id'])) {
  $customers_id = intval($_GET['customers_id']); // untuk keamanan
  $query = "DELETE FROM customers WHERE customers_id = $customers_id";
  
  if (mysqli_query($conn, $query)) {
    echo json_encode(["status" => "success"]);
    http_response_code(200);
  } else {
    echo json_encode(["status" => "error"]);
    http_response_code(500);
  }
} else {
  echo json_encode(["status" => "missing_id"]);
  http_response_code(400);
}
?>
