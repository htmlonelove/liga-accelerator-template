const buttons = [...document.querySelectorAll('[data-button="popup"')];
const popup = document.querySelector('[data-id="popup"]');

const checkPopup = () =>
  popup.classList.toggle('popup--hide');

const popupOn = () => {
  buttons.map((item) => item.addEventListener('click', checkPopup));
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popup.classList.add('popup--hide');
    }
  });
};

export {popupOn};
