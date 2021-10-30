let number1=0;
let number2=0;
let operador = '';
let numberString='';
let numberString2='';
let cont = 0;

function getInfo(value){

    if(cont==0 && isNaN(value) && value!='.'){
        operador=value;
        document.getElementById('display-superior').innerHTML = `${number1} ${operador}`;
        cont=cont +1;
        value=0;
        return;
    }

    if(cont == 0){
        numberString = `${numberString}${value}`;
        number1=numberString;
        document.getElementById('display').innerHTML = number1;
        document.getElementById('display-superior').innerHTML = `${number1}`;
    }
    if(cont == 1){
        numberString2 = `${numberString2}${value}`;
        number2=numberString2;
        document.getElementById('display').innerHTML = number2;
        document.getElementById('display-superior').innerHTML = `${number1} ${operador} ${number2} `;
    }
}

function calcula(){
    
    let aux;

    if(operador == '+'){
        aux = parseFloat(number1) + parseFloat(number2);
        document.getElementById('display').innerHTML = aux;
        limpar();
        document.getElementById('display').innerHTML = aux;
        document.getElementById('display-superior').innerHTML = aux;
        number1 = aux;
        return aux;
    }
    if(operador == '-'){
        aux = parseFloat(number1) - parseFloat(number2);
        document.getElementById('display').innerHTML = aux;
        limpar();
        document.getElementById('display').innerHTML = aux;
        document.getElementById('display-superior').innerHTML = aux;
        number1 = aux;
        return aux;
    }
    if(operador == '*'){
        aux = parseFloat(parseFloat(number1) * parseFloat(number2)).toPrecision(5);
        document.getElementById('display').innerHTML = aux;
        limpar();
        document.getElementById('display').innerHTML = aux;
        document.getElementById('display-superior').innerHTML = aux;
        number1 = aux;
        return aux;
    }
    if(operador == '/'){
        aux = parseFloat(parseFloat(number1) / parseFloat(number2)).toPrecision(5);
        document.getElementById('display').innerHTML = aux;
        limpar();
        document.getElementById('display').innerHTML = aux;
        document.getElementById('display-superior').innerHTML = aux;
        number1 = aux;
        return aux;
    }
}

function limpar(){
    document.getElementById('display').innerHTML = '';
    document.getElementById('display-superior').innerHTML = '';
    number1=0;
    number2=0;
    operador = '';
    numberString='';
    numberString2='';
    cont = 0;
}

