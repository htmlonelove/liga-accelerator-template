const footerNav = document.querySelector('[data-footer-navigation]');
const footerContacts = document.querySelector('[data-footer-contacts]');
const footerToggle = document.querySelector('[data-footer-toggle]');
const footerContactsToggle = document.querySelector('[data-footer-contacts-toggle]');
const footerContactsTitle = document.querySelector('[data-footer-contacts-title]');
const footerNavTitle = document.querySelector('[data-footer-title]');
const aboutButton = document.querySelector('[data-about-button]');
const aboutDescription = document.querySelectorAll('[data-about-description]');
const aboutDescriptionContainer = document.querySelector('[data-about-description-container]');


// Аккордеон в футере

const removeNojsClass = () => {
  footerNav.classList.remove('is-nojs');
  footerContacts.classList.remove('is-nojs');
};

const onClickOpenInfo = ( mainElement, sideElement ) => {
  return () => {
    mainElement.classList.toggle('is-closed');
    mainElement.classList.toggle('is-opened');
    sideElement.classList.remove('is-opened');
    sideElement.classList.add('is-closed');
  }
}

footerToggle.addEventListener('click', onClickOpenInfo(footerNav, footerContacts));
footerNavTitle.addEventListener('click', onClickOpenInfo(footerNav, footerContacts));
footerContactsToggle.addEventListener('click', onClickOpenInfo(footerContacts, footerNav));
footerContactsTitle.addEventListener('click', onClickOpenInfo(footerContacts, footerNav));


// Аккордеон в блоке 'О компании'

const hideAdditionalText = () => {
  for (let i = 2; i < aboutDescription.length ; i++) {
    aboutDescription[i].classList.add('hidden');
    aboutButton.classList.remove('is-nojs');
    aboutDescriptionContainer.classList.remove('is-nojs');
  }
}

aboutButton.addEventListener('click', () => {
  aboutButton.classList.toggle('is-opened');
  aboutButton.classList.toggle('is-closed');
  const windowInnerWidth = window.innerWidth;

  if (aboutButton.classList.contains('is-opened')) {
    aboutDescriptionContainer.style.maxHeight = "none";
    for (let i = 2; i < aboutDescription.length ; i++) {
      aboutDescription[i].classList.remove('hidden');
    }
    aboutButton.textContent="Свернуть";
  } else if (aboutButton.classList.contains('is-closed')) {
      if ( windowInnerWidth <= 767 ) {
        aboutDescriptionContainer.style.maxHeight = "200px";
        aboutButton.textContent="Подробнее";
        for (let i = 2; i < aboutDescription.length ; i++) {
          aboutDescription[i].classList.add('hidden');
        }
      } else {
        aboutButton.textContent="Подробнее";
        for (let i = 2; i < aboutDescription.length ; i++) {
          aboutDescription[i].classList.add('hidden');
        }
      }
    }
});

export { hideAdditionalText, removeNojsClass }
