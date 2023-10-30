import {initJurySlider} from './jury-slider';

const vpDesktop = 1366;
const vpTablet = 768;
const vpMobile = 0;

const loop = {
  loopJury: true,
};

const breakpointsJury = {
  [vpDesktop]: {
    slidesPerView: 4,
    spaceBetween: 40,
    allowTouchMove: false,
  },
  [vpTablet]: {
    slidesPerView: 2,
    spaceBetween: 32,
    allowTouchMove: true,
  },
  [vpMobile]: {
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: true,
  },
};

export const initSliders = () => {
  initJurySlider(loop['loopJury'], breakpointsJury);
};
