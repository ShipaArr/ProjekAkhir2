<?php
require_once 'admin_auth.php';
$admin = authenticateAdmin($db);

echo json_encode([
  'status' => 'success',
  'data' => ['message' => 'Halaman admin']
]);
?>