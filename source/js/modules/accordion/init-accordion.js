import {Accordion} from './accordion';

let footerShowHideElements;


const initAccordion = (needToUseAccordion) => {
  footerShowHideElements = new Accordion(needToUseAccordion);
  window.footerShowHideElements = footerShowHideElements;
};

export {footerShowHideElements, initAccordion};
