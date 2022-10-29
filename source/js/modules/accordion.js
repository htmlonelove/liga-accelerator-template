const footerNav = document.querySelector('[data-footer-navigation]');
const footerContacts = document.querySelector('[data-footer-contacts]');
const footerContactsArea = document.querySelector('[data-footer-contacts-area]');
const footerNavArea = document.querySelector('[data-footer-nav-area]');
const aboutButton = document.querySelector('[data-about-button]');
const aboutDescription = document.querySelectorAll('[data-about-description]');
const aboutDescriptionContainer = document.querySelector('[data-about-description-container]');


// Аккордеон в футере

const removeNojsClass = (element) => {
  if (element) {
    element.classList.remove('is-nojs');
  }
};

const onClickOpenInfo = (mainElement, sideElement) => {
  return () => {
    if (mainElement && sideElement) {
      mainElement.classList.toggle('is-closed');
      mainElement.classList.toggle('is-opened');
      sideElement.classList.remove('is-opened');
      sideElement.classList.add('is-closed');
    } else {
      mainElement.classList.toggle('is-closed');
      mainElement.classList.toggle('is-opened');
    }
  };
};

if (footerNavArea) {
  footerNavArea.addEventListener('click', onClickOpenInfo(footerNav, footerContacts));
}

if (footerContactsArea) {
  footerContactsArea.addEventListener('click', onClickOpenInfo(footerContacts, footerNav));
}

// Аккордеон в блоке 'О компании'

const hideAdditionalText = () => {
  if (aboutDescription.length > 2 && aboutButton) {
    for (let i = 2; i < aboutDescription.length; i++) {
      aboutDescription[i].classList.add('hidden');
      aboutButton.classList.remove('is-nojs');
      aboutDescriptionContainer.classList.remove('is-nojs');
    }
  }
};

if (aboutButton && aboutDescription.length > 2) {
  aboutButton.addEventListener('click', () => {
    aboutButton.classList.toggle('is-opened');
    aboutButton.classList.toggle('is-closed');
    const windowInnerWidth = window.innerWidth;

    if (aboutButton.classList.contains('is-opened')) {
      aboutDescriptionContainer.style.maxHeight = 'none';
      for (let i = 2; i < aboutDescription.length; i++) {
        aboutDescription[i].classList.remove('hidden');
      }
      aboutButton.textContent = 'Свернуть';
    } else if (aboutButton.classList.contains('is-closed')) {
      if (windowInnerWidth <= 767) {
        aboutDescriptionContainer.style.maxHeight = '200px';
        aboutButton.textContent = 'Подробнее';
        for (let i = 2; i < aboutDescription.length; i++) {
          aboutDescription[i].classList.add('hidden');
        }
      } else {
        aboutButton.textContent = 'Подробнее';
        for (let i = 2; i < aboutDescription.length; i++) {
          aboutDescription[i].classList.add('hidden');
        }
      }
    }
  });
}

export {hideAdditionalText, removeNojsClass, footerNav, footerContacts};
