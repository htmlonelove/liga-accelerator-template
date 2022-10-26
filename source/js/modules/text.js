const button = document.querySelector('[data-button]');
const catalogTitle = document.querySelector('[data-catalog-title]');

const changeButtonText = () => {
  if (window.innerWidth <= 767) {
    button.textContent = "бесплатная консультация";
    catalogTitle.textContent = "Товары и услуги Smart Device"
  }
}

export { changeButtonText };
