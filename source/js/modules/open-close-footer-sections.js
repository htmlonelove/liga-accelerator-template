export const openCloseFooterSections = () => {

  let openNavigationButton = document.querySelector('.footer-navigation__button--open');
  let closeNavigationButton = document.querySelector('.footer-navigation__button--close');
  let navigation = document.querySelector('.footer-navigation__navigation');
  let openAddressButton = document.querySelector('.footer-contacts__button--open');
  let closeAddressButton = document.querySelector('.footer-contacts__button--close');
  let address = document.querySelector('.contacts-container');


  openNavigationButton.addEventListener('click', function () {
    navigation.classList.remove('footer-navigation__navigation--closed');
    closeNavigationButton.classList.remove('visually-hidden');
    openNavigationButton.classList.add('visually-hidden');
    address.classList.add('contacts-container--closed');
    closeAddressButton.classList.add('visually-hidden');
    openAddressButton.classList.remove('visually-hidden');
    address.classList.remove('contacts-container--opened');
  });

  openAddressButton.addEventListener('click', function () {
    address.classList.remove('contacts-container--closed');
    address.classList.add('contacts-container--opened');
    closeAddressButton.classList.remove('visually-hidden');
    openAddressButton.classList.add('visually-hidden');
    navigation.classList.add('footer-navigation__navigation--closed');
    closeNavigationButton.classList.add('visually-hidden');
    openNavigationButton.classList.remove('visually-hidden');
  });

  closeAddressButton.addEventListener('click', function () {
    address.classList.add('contacts-container--closed');
    closeAddressButton.classList.add('visually-hidden');
    openAddressButton.classList.remove('visually-hidden');
    address.classList.remove('contacts-container--opened');
  });

  closeNavigationButton.addEventListener('click', function () {
    navigation.classList.add('footer-navigation__navigation--closed');
    closeNavigationButton.classList.add('visually-hidden');
    openNavigationButton.classList.remove('visually-hidden');
  });
};
