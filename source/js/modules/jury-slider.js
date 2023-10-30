export const initJurySlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-jury-swiper]');
  const buttonPrev = document.querySelector('[data-jury-swiper-btn-prev]');
  const buttonNext = document.querySelector('[data-jury-swiper-btn-next]');
  const slides = document.querySelectorAll('[data-jury-slide]');
  const slidesArray = [...slides];

  slidesArray.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: breakpointSettings,
  });
};
