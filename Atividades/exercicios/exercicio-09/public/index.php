<?php

require '../Models/Estado.php';

use src\Models\Estado;

$estado = new Estado(1, "Minas Gerais", "MG");
var_dump($estado);