export const openCloseModal = () => {

  let modal = document.querySelector('.modal-container');
  let modalCloseButton = document.querySelector('.modal-page__close-button');
  let modalOpenButton = document.querySelector('.main-header__button');
  let sendButton = document.querySelector('.modal-page__button');
  let modalFieldName = document.querySelector('.modal-page__input--name');
  let modalFieldPhone = document.querySelector('.modal-page__input--phone');
  let modalFieldMessage = document.querySelector('.modal-page__input--message');


  modalCloseButton.addEventListener('click', function () {
    modal.classList.remove('modal-container--opened');
    modal.classList.add('modal-container--closed');
  });

  modalOpenButton.addEventListener('click', function () {
    modal.classList.remove('modal-container--closed');
    modal.classList.add('modal-container--opened');
    modalFieldName.value = '';
    modalFieldPhone.value = '';
    modalFieldMessage.value = '';
    modalFieldName.classList.add('focused');
    modalFieldName.focus();
  });

  sendButton.addEventListener('click', function () {
    event.preventDefault();
    modal.classList.remove('modal-container--opened');
    modal.classList.add('modal-container--closed');
  });
};
