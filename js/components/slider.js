import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);

let el  = document.querySelector('.trainers__content')

const swiper = new Swiper(el, {
  slidesPerView: 'auto',
  spaceBetween: 40,
  scrollbar: {
    el: '.trainers__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.trainers__slider-btn--next',
    prevEl: '.trainers__slider-btn--prev',
  },
});
