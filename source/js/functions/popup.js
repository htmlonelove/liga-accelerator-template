const buttons = [...document.querySelectorAll('[data-button="popup"')];
const popup = document.querySelector('[data-id="popup"]');

const checkPopup = () => {
  popup.classList.toggle('popup--hide');
  popup.querySelector('input').focus();

};

const popupOn = () => {
  buttons.map((item) => item.addEventListener('click', checkPopup));
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popup.classList.add('popup--hide');
      if (!popup.classList.contains('popup--hide')) {
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        document.querySelector('body').style.overflow = 'visible';
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
