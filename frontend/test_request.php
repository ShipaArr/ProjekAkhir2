<?php
$url = "http://localhost/Project_Pemweb_Kelompok2/backend/insert_order.php";

$data = [
    "name" => "Tester",
    "email" => "tester@example.com",
    "wa" => "081234567890",
    "address" => "Jalan Testing",
    "location" => "bali",
    "checkIn" => "2025-05-10",
    "checkOut" => "2025-05-12",
    "guest" => "2-0",
    "message" => "Ini hanya testing dari PHP"
];

$options = [
    'http' => [
        'header'  => "Content-type: application/json\r\n",
        'method'  => 'POST',
        'content' => json_encode($data),
    ]
];

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

header('Content-Type: application/json');
echo $result;
