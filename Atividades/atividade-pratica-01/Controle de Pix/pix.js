let saldo = 0;
//vetor de historico

function limparSelect(campo){

    while(campo.length > 1){
        campo.remove(1);
    }
}

function carregarBancos(){

    fetch("https://brasilapi.com.br/api/banks/v1")
        .then(response => response.json())
        .then(data => preencherSelectBancos(data))
        .catch(error => console.error(error))
}

function preencherSelectBancos(data){

    let bancos = document.getElementById("bancos");
    limparSelect(bancos);

    for(let index in data){

        const{name} = data[index];

        let option = document.createElement("option");
        option.innerHTML = name;

        bancos.appendChild(option);

    }
}

function carregarBancos2(){

    fetch("https://brasilapi.com.br/api/banks/v1")
        .then(response => response.json())
        .then(data => preencherSelectBancos2(data))
        .catch(error => console.error(error))
}

function preencherSelectBancos2(data){

    let bancos2 = document.getElementById("bancos2");
    limparSelect(bancos2);

    for(let index in data){

        const{name} = data[index];

        let option = document.createElement("option");
        option.innerHTML = name;

        bancos2.appendChild(option);

    }
}

function executa(){

    //novo saldo

    //salvar em um vetor para historico

}