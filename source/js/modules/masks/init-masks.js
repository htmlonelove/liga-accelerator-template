import {Masks} from './masks';

let inputMaskElements;


const initMasks = () => {
  inputMaskElements = new Masks();
  window.inputMaskElements = inputMaskElements;
};

export {inputMaskElements, initMasks};
