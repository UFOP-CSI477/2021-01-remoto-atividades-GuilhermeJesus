<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 7 -  Apresentação Clientes</title>
</head>
<body>
    <?php
        while($cliente = $novos->fetch()){
            echo "id: " . $cliente["id"]. " - Name: " . $cliente["nome"]. " " . $cliente["email"]. "<br>";
        }
    ?>
</body>
</html>