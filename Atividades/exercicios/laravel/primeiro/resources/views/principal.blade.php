<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Principal</title>
</head>
<body>
<div class="col-md-6">
            <div>
              <a href="{{route('principal')}}" target="_blank">Home</a>
            </div>
            
            <div>
              <a href="{{route('estados.index')}}" target="_blank">Estados</a>
            </div>
              
            <div>
              <a href="{{route('estados.cidades')}}" target="_blank">Cidades</a>
            </div>   

            @yield('conteudo')
</body>
</html>