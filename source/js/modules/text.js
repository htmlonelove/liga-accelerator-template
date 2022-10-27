const mainBlockButton = document.querySelector('[data-button]');
const catalogTitle = document.querySelector('[data-catalog-title]');

const changeButtonText = () => {
  if (mainBlockButton && window.innerWidth <= 767) {
    mainBlockButton.textContent = 'бесплатная консультация';
  }
};

const changeTitleText = () => {
  if (catalogTitle && window.innerWidth <= 767) {
    catalogTitle.textContent = 'Товары и услуги Smart Device';
  }
};

export {changeButtonText, changeTitleText};
