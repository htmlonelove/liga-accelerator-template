import {Accordion} from './accordion';

let footerShowHideElements;


const initAccordion = () => {
  footerShowHideElements = new Accordion();
  window.footerShowHideElements = footerShowHideElements;
};

export {footerShowHideElements, initAccordion};
