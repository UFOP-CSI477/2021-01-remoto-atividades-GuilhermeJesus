<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 7 -  Apresentação Cadastros</title>
</head>
<body>
    <?php
        while($novo = $tabela->fetch()){
            echo " Name: " . $novo["nome"]. " " . $novo["siglas"]. "<br>";
        }
    ?>
</body>
</html>