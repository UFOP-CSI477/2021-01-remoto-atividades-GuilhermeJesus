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