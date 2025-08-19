document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-hamburguer");
  const menu = document.querySelector(".menu");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");   // animação X
    menu.classList.toggle("active");  // abre/fecha menu
  });
});



document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    let answer = btn.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});




function abrirImagem(src) {
  document.getElementById('lightbox').style.display = 'block';
  document.getElementById('imagem-lightbox').src = src;
}

function fecharImagem() {
  document.getElementById('lightbox').style.display = 'none';
}






