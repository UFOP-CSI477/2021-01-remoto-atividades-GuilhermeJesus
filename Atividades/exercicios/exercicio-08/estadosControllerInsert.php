<?php
    require 'conexao.php';

    $nome = $_POST['nome'];
    $sigla = $_POST['sigla'];

    $stmt = $conn->prepare("INSERT INTO estados (nome,sigla) VALUES (:nome,:sigla)");

    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':sigla', $sigla);

    $stmt->execute();

    header(Location: 'index.php');
    exit();