const mainBlockButton = document.querySelector('[data-button]');
const catalogTitle = document.querySelector('[data-catalog-title]');

const changeButtonText = () => {
  if (mainBlockButton && window.innerWidth <= 767) {
    mainBlockButton.textContent = 'бесплатная консультация';
  } else {
    mainBlockButton.textContent = 'Получить бесплатную консультацию';
  }
};

const changeTitleText = () => {
  if (catalogTitle && window.innerWidth <= 767) {
    catalogTitle.textContent = 'Товары и услуги Smart Device';
  } else {
    catalogTitle.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
};

window.addEventListener('resize', () => {
  changeButtonText();
  changeTitleText();
});

export {changeButtonText, changeTitleText};
