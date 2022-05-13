import {ScrollTo} from './scrolls';

let scrollToElements;


const initScrolls = () => {
  scrollToElements = new ScrollTo();
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.scrollToElements = scrollToElements;
};

export {scrollToElements, initScrolls};
