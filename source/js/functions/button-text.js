const infoButton = document.querySelector('[data-button="info"]');

const changeText = () => {
  if (window.innerWidth >= 768) {
    infoButton.innerHTML = 'Получить бесплатную консультацию';
  } else {
    infoButton.innerHTML = 'бесплатная консультация';
  }
};

const changeOnResize = () => {
  window.addEventListener('resize', changeText);
};

export {changeText, changeOnResize};
