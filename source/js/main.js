import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initScrolls} from './modules/scrollToModule/init-scrolls';
import {initTextExpanders} from './modules/textExpander/init-textExpander';
import {initMasks} from './modules/masks/init-masks';
import {initAccordion} from './modules/accordion/init-accordion';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    let isMobileView = false;

    initModals();
    initScrolls();

    initMasks();
    const breakpoint = window.matchMedia('(max-width:770px)');
    const breakpointChecker = () => {
      if (breakpoint.matches) {
        initAccordion();
        isMobileView = true;
      } else {
        initAccordion(false);
      }
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
    initTextExpanders(isMobileView);
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

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
