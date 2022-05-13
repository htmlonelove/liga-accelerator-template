import {Masks} from './masks';

let inputMaskElements;


const initMasks = () => {
  inputMaskElements = new Masks();
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.inputMaskElements = inputMaskElements;
};

export {inputMaskElements, initMasks};
