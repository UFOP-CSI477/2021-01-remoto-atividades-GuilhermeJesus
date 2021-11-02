<?php

    //echo "POST";
    //var_dump($_POST);

    $user = $_POST["usuario"];
    $password = $_POST["senha"];

    if($user == "admin" && $password == "123456"){
        echo "<h1> OLA, $user !<h1>";
        echo "<p> Senha: $password </p>";
    }else{
        echo "<h1> Usuario e/ou senha invalidos";
    }

    echo "<a href=\"index.html\">Voltar</a>";
