<?php
class Database {
    private $host = "localhost";
    private $db_name = "tour_booking";
    private $username = "root"; // Ganti dengan username DB Anda
    private $password = "";     // Ganti dengan password DB Anda
    public $conn;

    

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            error_log("Connection error: " . $exception->getMessage());
        }
        return $this->conn;
    }
}
?>