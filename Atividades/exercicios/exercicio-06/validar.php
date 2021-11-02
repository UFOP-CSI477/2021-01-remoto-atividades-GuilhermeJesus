<?php

    echo "POST";
    var_dump($_POST);

    $usuario = $_POST["usuario"];
    $email = $_POST["email"];
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $cep = $_POST["cep"];

    echo "<h1> DADOS DO CADASTRO DE , $usuario !<h1>";

    echo "<p> Nome: $nome </p>";
    echo "<p> Email: $email </p>";
    echo "<p> Telefone: $telefone </p>";
    echo "<p> CEP: $cep </p>";
