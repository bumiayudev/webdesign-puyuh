document.addEventListener('DOMContentLoaded', function () {
  // const slider = document.querySelector('.slider');
  // const cards = document.querySelectorAll('.card');
  // const prev = document.querySelector('.prev');
  // const next = document.querySelector('.next');

  // let index = 0;

  // function showSlide() {
  //   slider.style.transform = `translateX(-${index * 100}%)`;
  // }

  // setInterval(() => {
  //   index = (index + 1) % cards.length;
  //   showSlide();
  // }, 5000);


  // next.addEventListener('click', () => {
  //   index++;
  //   if (index >= cards.length) {
  //     index = 0;
  //   }
  //   showSlide();
  // });

  // prev.addEventListener('click', () => {
  //   index--;
  //   if (index < 0) {
  //     index = cards.length - 1;
  //   }
  //   showSlide();
  // });
  const slides = document.querySelectorAll('.slide');
  let current = 0;


  setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');


  // reset typing animation
  const title = slides[current].querySelector('h1');
  title.style.animation = 'none';
  title.offsetHeight; // trigger reflow
  title.style.animation = null;
  }, 6000);
});