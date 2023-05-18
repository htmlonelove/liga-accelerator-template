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
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          centeredSlides: false,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
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

      // breakpoints: {
      // when window width is >= 320px
      //   320: {
      //     slidesPerView: 1,
      //     slidesPerGroup: 1,
      //     centeredSlides: false,
      //   },
      // }
      //   // when window width is >= 768px
      //   768: {
      //     slidesPerView: 2,
      //     slidesPerGroup: 2,
      //     spaceBetween: 30,
      //     centeredSlides: false,
      //   },
      //   // when window width is >= 1200px
      //   // 1200: {
      //   //   slidesPerView: 3,
      //   //   slidesPerGroup: 3,
      //   //   centeredSlides: false,
      //   // },
      //   // // when window width is >= 1200px
      //   1280: {
      //     slidesPerView: 4,
      //     slidesPerGroup: 4,
      //     centeredSlides: false,
      //   },
      // },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

};

export {initTrainersSlider};
