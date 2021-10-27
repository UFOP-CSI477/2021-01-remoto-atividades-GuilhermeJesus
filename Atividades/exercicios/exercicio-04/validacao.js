function recebeDados() {
  let nome = document.formulario.nome.value;
  let usuario = document.formulario.usuario.value;
  let tel = document.formulario.telefone.value;
  let cep = document.formulario.cep.value;
  let email = document.formulario.email.value;

  if (!nome || !usuario || !tel || !cep || !email) {
    window.alert("Informe todos os campos !");
    return;
  }

  if (!email.includes("@")) {
    window.alert("Informe email valido !");
    return;
  }

  if (!nome.match(/^[A-Za-z]+$/)) {
    window.alert("Informe um nome valido !");
    return;
  }

  if (!cep.match(/^[0-9]+$/)) {
    window.alert("Informe um valor valido para o CEP !");
    return;
  }

  if (!tel.match(/^[0-9]+$/)) {
    window.alert("Informe um valor valido para o telefone !");
    return;
  }
}
