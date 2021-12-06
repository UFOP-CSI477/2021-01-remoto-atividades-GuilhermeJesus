<?php

require_once './conexao.php';

$clientes = $conn->query("SELECT * FROM novos");

require_once "./apresenta.php";

?>