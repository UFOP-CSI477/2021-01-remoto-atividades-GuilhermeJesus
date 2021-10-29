let number1=0;
let number2=0;
let operador = '';
let numberString='';
let numberString2='';
let cont = 0;

function getInfo(value){

    if(isNaN(value) && value!='.'){
        operador=value;
        cont=cont +1;
        value=0;
        return;
    }
    if(cont == 0){
        //Falta mostrar no display
        numberString = `${numberString}${value}`;
        number1=numberString;
    }
    if(cont == 1 ){
        numberString2 = `${numberString2}${value}`;
        number2=numberString2;
    }
}

function calcula(){

    window.alert(number1);
    window.alert(operador)
    window.alert(number2);

    let aux;

    if(operador == '+'){
        aux = parseFloat(number1) + parseFloat(number2);
        document.getElementById('display').innerHTML = aux;
        window.alert(aux);
    }
    if(operador == '-'){
        aux = parseInt(number1) - parseInt(number2);
        window.alert(aux);
    }
    if(operador == '*'){
        aux = parseInt(number1) * parseInt(number2);
        window.alert(aux);
    }
    if(operador == '/'){
        aux = parseInt(number1) / parseInt(number2);
        window.alert(aux);
    }
}

function clear(){
    //Falta concertar
    number1=0;
    number2=0;
    operador = '';
    numberString='';
    numberString2='';
    cont = 0;
}

function test(){
    let a = 5;
    let b = 6;
    let c = 2;
    let test = a+ '.'+b; 
    test = parseFloat(test)*c;
    window.alert(test);
}