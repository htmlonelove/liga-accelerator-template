import { isEscapeKey } from './utils.js';

let modal = document.querySelector('.modal-container');
let modalFieldPhone = document.querySelector('.modal-page__input--phone');
let modalFieldMessage = document.querySelector('.modal-page__input--message');
let modalFieldName = document.querySelector('.modal-page__input--name');
let pageBody = document.querySelector('body');

export const openCloseModal = () => {
  let modalCloseButton = document.querySelector('.modal-page__close-button');
  let modalOpenButton = document.querySelector('.main-header__button');
  let modalContainer = document.querySelector('.modal-page');

  modalCloseButton.addEventListener('click', function () {
    closeModal();
  });

  modalOpenButton.addEventListener('click', function () {
    openModal();
  });

  const onModalEscDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal();
    }
  };

  const onModalFormEscDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModalWindow();
    }

    function closeModalWindow() {
      closeModal();
      document.removeEventListener('keydown', onModalEscDown);
    }
  };

  const openModal = function () {
    modal.classList.remove('modal-container--closed');
    modal.classList.add('modal-container--opened');
    modalFieldName.value = '';
    modalFieldPhone.value = '';
    modalFieldMessage.value = '';
    modalFieldName.classList.add('focused');
    modalFieldName.focus();
    pageBody.classList.add('no-overflow');

    document.addEventListener('keydown', onModalFormEscDown);
  };

  const closeModal = () => {
    modal.classList.remove('modal-container--opened');
    modal.classList.add('modal-container--closed');
    pageBody.classList.remove('no-overflow');

    document.removeEventListener('keydown', onModalFormEscDown);
  };

  modal.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(modalContainer);

    if (!withinBoundaries) {
      closeModal();
    }
  });
};
