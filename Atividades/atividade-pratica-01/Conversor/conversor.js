let valor1=0;
let valor2=0;

function limparSelect(campo) {
  while (campo.length > 1) {
    campo.remove(1);
  }
}

function carregarMoeda() {
  fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado,tipoMoeda")
    .then((response) => response.json())
    .then((data) => preencherSelectMoeda(data.value))
    .catch((error) => console.error(error));
}

function preencherSelectMoeda(data) {
  let moeda = document.getElementById("moeda");
  limparSelect(moeda);

  console.log(data);

  for (let index in data) {
    const { simbolo } = data[index];

    let option = document.createElement("option");
    option.innerHTML = simbolo;

    moeda.appendChild(option);
  }
}

function carregarMoeda2() {
  fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado,tipoMoeda")
    .then((response) => response.json())
    .then((data) => preencherSelectMoeda2(data.value))
    .catch((error) => console.error(error));
}

function preencherSelectMoeda2(data) {
  let moeda2 = document.getElementById("moeda2");
  limparSelect(moeda2);

  for (let index in data) {
    const { simbolo } = data[index];

    let option = document.createElement("option");
    option.innerHTML = simbolo;

    moeda2.appendChild(option);
  }
}

// ---------------------------------------------------------

let urlTeste ="https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='EUR'&@dataCotacao='11-05-2021'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda"
let url2 ="https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='EUR'&@dataCotacao='11-05-2021'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda"

function converte(){

  valor1 = carregar();

  valor2 = carregar2();

  window.alert(valor1);
  console.log(valor2);
}

function carregar() {
  fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='USD'&@dataCotacao='11-05-2021'&$top=100&$format=json&$select=cotacaoCompra")
    .then((response) => response.json())
    .then((data) => recebeValor(data.value))
    .catch((error) => console.error(error));
}

function recebeValor(data) {

  console.log(data)
  
  for(key in data) {
    if(data.hasOwnProperty(key)) {
        var cot = Object.values(data[key]);
    }
  }
  console.log(cot)
return cot;
}

function carregar2() {
  fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='USD'&@dataCotacao='11-04-2021'&$top=100&$format=json&$select=cotacaoCompra")
    .then((response) => response.json())
    .then((data) => recebeValor2(data.value))
    .catch((error) => console.error(error));
}

function recebeValor2(data) {

  console.log(data)
  
  for(key in data) {
    if(data.hasOwnProperty(key)) {
        var cot = Object.values(data[key]);
    }
  }
  console.log(cot)
return cot;
}