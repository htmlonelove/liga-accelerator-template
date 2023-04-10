/* eslint-disable quotes */
const button = document.querySelector('[data-button="company"]');
const text = [...document.querySelectorAll('[data-text="company"]')];

const openCompanyInfo = () => {
  text.map((item) => {
    if (item.dataset.hide === 'desktop') {
      if (item.classList.contains('company__text-item--hide')) {
        item.classList.remove('company__text-item--hide');
      } else {
        item.classList.add('company__text-item--hide');
      }
    } else if (item.dataset.hide === 'mobile') {
      if (item.classList.contains('company__text-item--hide-mobile')) {
        item.classList.remove('company__text-item--hide-mobile');
      } else {
        item.classList.add('company__text-item--hide-mobile');
      }
    }
  });
};

const changeButtonText = () => {
  if (button.dataset.open === "false") {
    button.innerText = 'Свернуть';
    button.dataset.open = 'true';
    button.blur();
  } else {
    button.innerText = 'Подробнее';
    button.dataset.open = 'false';
    button.blur();
  }
};

const onCompanyInfo = () => {
  button.addEventListener('click', openCompanyInfo);
  button.addEventListener('click', changeButtonText);
};

export {onCompanyInfo};
