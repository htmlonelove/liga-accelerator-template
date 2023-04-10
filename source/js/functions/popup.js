const buttons = [...document.querySelectorAll('[data-button="popup"')];
const popup = document.querySelector('[data-id="popup"]');
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const checkPopup = () => {
  popup.classList.toggle('popup--hide');
  popup.querySelector('input').focus();
};

const popupOn = () => {
  buttons.map((item) => item.addEventListener('click', checkPopup));
  window.addEventListener('click', () => {
    if (!popup.classList.contains('popup--hide')) {
      main.setAttribute('inert', 'true');
      header.setAttribute('inert', 'true');
      footer.setAttribute('inert', 'true');
    } else {
      main.removeAttribute('inert');
      header.removeAttribute('inert');
      footer.removeAttribute('inert');
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popup.classList.add('popup--hide');
      if (!popup.classList.contains('popup--hide')) {
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        document.querySelector('body').style.overflow = 'visible';
      }
      if (!popup.classList.contains('popup--hide')) {
        main.setAttribute('inert', 'true');
        header.setAttribute('inert', 'true');
        footer.setAttribute('inert', 'true');
      } else {
        main.removeAttribute('inert');
        header.removeAttribute('inert');
        footer.removeAttribute('inert');
      }
    }
  });
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.popup__container') && !target.classList.contains('header__button')) {
      popup.classList.add('popup--hide');
    }
    if (!popup.classList.contains('popup--hide')) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'visible';
    }
  });
};

export {popupOn};
