<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Models\Estado;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/ola', function(){
    return 'Ola Mundo!';
});

Route::get('/estados', function(){
    $estados = Estado::all();
    return view('lista', ['dados' => $estados]);
});

Route::get('/estados/{id}', function(){
    $estado = Estado::find($id);

    if($estado == null){
        return 'ID INVALIDO';
    }
    
    return view('lista', ['dados' => $estado]);
});