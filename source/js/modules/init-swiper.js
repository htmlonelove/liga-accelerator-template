import Swiper, {Navigation} from '../../../node_modules/swiper/swiper-bundle';
Swiper.use([Navigation]);


const trainersSlider = document.querySelector('.swiper-container');

const initTrainersSlider = () => {

  if (trainersSlider) {

    // eslint-disable-next-line no-unused-vars
    const mySwiper = new Swiper('.swiper__slider', {
      direction: 'horizontal',
      loop: true,
      IOSEdgeSwipeDetection: true,
      onTouchStart() {
        return false;
      },
      scrollbar: {
        container: '.swiper-scrollbar',
        hide: false,
        draggable: true,
        snapOnRelease: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          centeredSlides: false,
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30,
          centeredSlides: false,
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

};

export {initTrainersSlider};
