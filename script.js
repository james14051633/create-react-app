
function mostrarSecao(secao) {
  document.querySelectorAll('main section').forEach(s => s.style.display = 'none');
  document.getElementById(secao).style.display = 'block';
}

function imprimirAnamnese() {
  window.print();
}
