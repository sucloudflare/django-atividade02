function mostrarMensagem() {
  alert("Obrigado por visitar meu perfil!");
}

const btnMensagem = document.getElementById("btnMensagem");

if (btnMensagem) {
  btnMensagem.addEventListener("click", mostrarMensagem);
}
