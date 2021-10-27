function limparSelect(campo){

    while(campo.length > 1){
        campo.remove(1);
    }
}

function preencherSelectRegioes(data){

    let regioes = document.getElementById("regioes");
    limparSelect(regioes);

    for(let index in data){

        const{id,nome} = data[index];

        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = nome;

        regioes.appendChild(option);

    }
}

function carregarRegioes(){

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
        .then(response => response.json())
        .then(data => preencherSelectRegioes(data))
        .catch(error => console.error(error))
}

function carregarEstados(){

    const regioes = document.getElementById("regioes");
    const regioes_index = regioes.selectedIndex;
    const regioes_id = regioes.options[regioes_index].value;

    const estados = document.getElementById("estados");
    limparSelect(estados);

    if(regioes_id==""){
        return;
    }

    const url_estados = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes_id}/estados`

    fetch(url_estados)
        .then(response => response.json())
        .then(data => preencherSelectEstados(data))
        .catch(error => console.error(error))
}

function preencherSelectEstados(data){

    let estados = document.getElementById("estados");
    limparSelect(regioes);

    for(let index in data){

        const{id,nome} = data[index];

        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = nome;

        estados.appendChild(option);

    }
}

function carregarCidades(){

    const estados = document.getElementById("estados");
    const estados_index = estados.selectedIndex;
    const estado_id = estados.options[estados_index].value;

    const cidades = document.getElementById("cidades");
    limparSelect(cidades);

    if(estado_id==""){
        return;
    }

    const url_cidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/distritos`

    fetch(url_cidades)
        .then(response => response.json())
        .then(data => preencherSelectCidades(data))
        .catch(error => console.error(error))
}

function preencherSelectCidades(data){

    let cidades = document.getElementById("cidades");
    limparSelect(estados);

    for(let index in data){

        const{id,nome} = data[index];

        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = nome;

        cidades.appendChild(option);

    }
}

