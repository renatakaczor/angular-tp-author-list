<?php 

$dsn = 'mysql:dbname=aston;host=127.0.0.1';
$user = 'root';
$password = 'paris';

try {
    $pdo = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
}