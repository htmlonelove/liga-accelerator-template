import {TextExpander} from './textExpander';

let expandTextElements;


const initTextExpanders = (isMobileView) => {
  expandTextElements = new TextExpander(isMobileView);
  window.expandTextElements = expandTextElements;
};

export {expandTextElements, initTextExpanders};
