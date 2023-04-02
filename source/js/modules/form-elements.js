export const modalFocus = () => {
  let modalForm = document.querySelector('.modal-page__content');

  let focusableElements = modalForm.querySelectorAll('button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled])');

  let firstFocusableElement = focusableElements[0];
  let lastFocusableElement = focusableElements[focusableElements.length - 1];

  let KEYCODE_TAB = 9;

  modalForm.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
      if (e.shiftKey) /* shift + tab */ {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}
