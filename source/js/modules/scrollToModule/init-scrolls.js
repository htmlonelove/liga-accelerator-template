import {ScrollTo} from './scrolls';

let scrollToElements;


const initScrolls = () => {
  scrollToElements = new ScrollTo();
  window.scrollToElements = scrollToElements;
};

export {scrollToElements, initScrolls};
