const swiper = new Swiper('.trainers__swiper', {
  // Optional parameters
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1360: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.trainers__swiper-button--along',
    prevEl: '.trainers__swiper-button--back',
  },
});
