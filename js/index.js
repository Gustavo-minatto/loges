import Events from './events.js'
Events()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//scrool
document.getElementById('scroll-icon').addEventListener('click', function () {
  const target = document.getElementById('target-section');

  target.scrollIntoView({
    behavior: 'smooth'
  });

  setTimeout(function () {
    const offset = -100;
    window.scrollBy(0, offset);
  }, 500);
});

//zapzap
document.addEventListener('scroll', function () {
  const elementos = document.querySelectorAll('.reveal');

  elementos.forEach(function (elemento) {
    const posicaoElemento = elemento.getBoundingClientRect().top;
    const tamanhoTela = window.innerHeight;

    if (posicaoElemento < tamanhoTela - 100) {
      elemento.classList.add('ativo');
    } else {
      elemento.classList.remove('ativo');
    }
  });
});

//tela inicial
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.querySelector('.mensagem-inicial').style.display = 'none';
    document.querySelector('.inicial').style.display = 'flex';
  }, 2000);
});
