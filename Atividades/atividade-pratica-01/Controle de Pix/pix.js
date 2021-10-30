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