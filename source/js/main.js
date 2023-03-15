import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

// Аккордеон в футере

const acc = document.querySelectorAll('.accordion__title');

acc.forEach((el) => el.classList.toggle('accordion__title--active'));
acc.forEach((el) => el.addEventListener('click', (evt) => openAccordion(evt)));

const openAccordion = (evt) => {
  if (evt.target.classList.contains('accordion__title')) {
    evt.target.classList.toggle('accordion__title--active');
    if (!evt.target.classList.contains('accordion__title--active')) {
      acc.forEach((el) => el.classList.add('accordion__title--active'));
      evt.target.classList.toggle('accordion__title--active');
    }
  }
};


// Показ текста

const moreButton = document.querySelector('.about__link');
const moreText = document.querySelector('.about__text');

if (moreText) {
  const openText = () => {
    if (!moreText.classList.contains('about__text--show')) {
      moreButton.textContent = 'Свернуть';
      moreText.classList.add('about__text--show');
    } else {
      moreButton.textContent = 'Подробнее';
      moreText.classList.remove('about__text--show');
    }
  };

  moreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openText();
  });
}


// Маска номера телефона
const inputsPhone = document.querySelectorAll('[data-phone-number]');

const prefixNumber = (str) => {
  if (str === '7') {
    return '7 (';
  }
  if (str === '8') {
    return '8 (';
  }
  if (str === '9') {
    return '7 (9';
  }
  return '7 (';
};

inputsPhone.forEach((el) => el.addEventListener('input', () => {
  const value = el.value.replace(/\D+/g, '');
  const numberLength = 11;

  let result;
  if (el.value.includes('+8') || el.value[0] === '8') {
    result = '';
  } else {
    result = '+';
  }

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i]);
        continue;
      case 4:
        result += ') ';
        break;
      case 7:
        result += '-';
        break;
      case 9:
        result += '-';
        break;
      default:
        break;
    }
    result += value[i];
  }
  el.value = result;
}));

const forms = document.querySelectorAll('.form');

if (document.querySelector('.form')) {
  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      if (!(form.querySelector('[data-phone-number]').value.length < 18)) {
        return;
      } else {
        evt.preventDefault();
        showError(form.querySelector('[data-phone-number]'));
      }
    });
  });
}

const showError = (elem) => {
  elem.classList.add('error');
  setTimeout(() => {
    elem.classList.remove('error');
  }, 1000);
};

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
  });
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
