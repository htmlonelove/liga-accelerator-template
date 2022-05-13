import {TextExpander} from './textExpander';

let expandTextElements;


const initTextExpanders = () => {
  expandTextElements = new TextExpander();

  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.expandTextElements = expandTextElements;
};

export {expandTextElements, initTextExpanders};
