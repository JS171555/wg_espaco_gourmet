// Aguarda o carregamento total da página
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  // Inicia o efeito de fade-out
  preloader.classList.add('fade-out');
  // Após a transição, remove o preloader da tela
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 500);
});