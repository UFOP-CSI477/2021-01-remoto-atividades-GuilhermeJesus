<?php

$hostname = "localhost";
$bancodedados = "clientes";
$usuario = "root";
$senha = "";

try {
  $conn = new PDO("mysql:host=$hostname;dbname=$bancodedados", $usuario, $senha);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>