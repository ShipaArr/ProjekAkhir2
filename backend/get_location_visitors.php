<?php
require_once 'db_connection.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

try {
    $db = (new Database())->getConnection();

    $query = "
        SELECT t.location, COUNT(o.order_id) AS total_visitors
        FROM orders o
        JOIN tours t ON o.tour_id = t.tour_id
        GROUP BY t.location
    ";
    $stmt = $db->query($query);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($results);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "DB error: " . $e->getMessage()]);
}
