<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir Dados</title>
</head>
<body>
    <form action="estadosControllerInsert.php" method="post">

        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome">

        <label for="sigla">Sigla</label>
        <input type="text" id="sigla" name="sigla">

        <button type="submit">Inserir</button>
    </form> 
</body>
</html>