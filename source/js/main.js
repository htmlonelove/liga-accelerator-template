import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initTabs} from './modules/tabs/init-tabs';
import Swiper from '../js/vendor/swiper';
import {initAccordions} from './modules/accordions/init-accordion';

// ---------------------------------

const trainerSwiper = new Swiper('.trainer__swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoHeight: true,
  slidesPerView: 4,

  simulateTouch: true,
  touchRatio: 1,

  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  watchOverflow: true,

  spaceBetween: 40,

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1200: {
  //     slidesPerView: 4,
  //   },
  // },

});

const reviewsSwiper = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  // loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoHeight: true,
  slidesPerView: 1,

  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  simulateTouch: true,
  touchRatio: 1,


  watchOverflow: true,


  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1200: {
  //     slidesPerView: 4,
  //   },
  // },

});

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initAccordions();
  });
  initTabs();
  trainerSwiper();
  reviewsSwiper();
});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
