let valor1 = 0;
let valor2 = 0;
let aux=0;

let m1 = "";
let m2 = "";

function limparSelect(campo) {
  while (campo.length > 1) {
    campo.remove(1);
  }
}

function carregarMoeda() {
  fetch(
    "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado,tipoMoeda"
  )
    .then((response) => response.json())
    .then((data) => preencherSelectMoeda(data.value))
    .catch((error) => console.error(error));
}

function preencherSelectMoeda(data) {
  let moeda = document.getElementById("moeda");
  limparSelect(moeda);

  for (let index in data) {
    const { simbolo } = data[index];

    let option = document.createElement("option");
    option.innerHTML = simbolo;

    moeda.appendChild(option);
  }
}

function carregarMoeda2() {
  fetch(
    "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado,tipoMoeda"
  )
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

let urlTeste =
  "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='EUR'&@dataCotacao='11-05-2021'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda";
let url2 =
  "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='EUR'&@dataCotacao='11-05-2021'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda";

function converte() {
  carregarMoeda();
  carregarMoeda2();

  m1 = document.getElementById("moeda").value;
  m2 = document.getElementById("moeda2").value;

  carregar2();
  carregar();

  console.log("TESTE");
  console.log(valor1);
  console.log(valor2);
}

function carregar() {
  fetch(
    "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='USD'&@dataCotacao='11-05-2021'&$top=100&$format=json&$select=cotacaoCompra"
  )
    .then((response) => response.json())
    .then((data) => recebeValor(data.value))
    .catch((error) => console.error(error));
}

function recebeValor(data) {
  let teste = [];

  Object.entries(data).map(([key, value]) => teste.push(parseFloat(value.cotacaoCompra)));

  aux = teste[teste.length - 1];
  console.log("TESTE",typeof(aux),aux);
}

function carregar2() {
  fetch(
    "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='USD'&@dataCotacao='11-04-2021'&$top=100&$format=json&$select=cotacaoCompra"
  )
    .then((response) => response.json())
    .then((data) => recebeValor2(data.value))
    .catch((error) => console.error(error));
}

function recebeValor2(data) {
  let teste = [];

  Object.entries(data).map(([key, value]) => teste.push(parseFloat(value.cotacaoCompra)));

  aux = teste[teste.length - 1];
  console.log("TESTE",typeof(aux),aux);
}
