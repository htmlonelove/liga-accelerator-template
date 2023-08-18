const swiper = new Swiper('.reviews__swiper', {
  // Optional parameters

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
    1360: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__swiper-button--along',
    prevEl: '.reviews__swiper-button--back',
    disabledClass: 'reviews__button-disabled',
  },
});
