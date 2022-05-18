export class Accordion {
  constructor(needToUseAccordion) {
    this._expandMenuButtons = document.querySelectorAll('[data-expand-menu-button]');
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._eventTimeout = 400;
    this._needToUseAccordion = needToUseAccordion;

    this._init();
  }

  _init() {

    if (this._expandMenuButtons.length) {
      document.addEventListener('click', this._documentClickHandler);
    }
    if (this._needToUseAccordion === false) {
      this._expandMenuButtons.forEach((element) => {
        element.setAttribute('open', 'open');
      });
    }
  }

  _documentClickHandler(evt) {
    const target = evt.target;

    if (!target.closest('[data-expand-menu-button]')) {
      return;
    }

    if (this._needToUseAccordion === false) {
      evt.preventDefault();
      return;
    }

    const expandButtonElement = target.closest('[data-expand-menu-button]');

    this._clickedButton = expandButtonElement;

    this.toggleElements();
  }

  toggleElements(thisButton = this._clickedButton) {
    thisButton.parentElement.classList.toggle('is-hidden');
    this._expandMenuButtons.forEach((element) => {
      if (element.dataset.expandMenuButton !== thisButton.dataset.expandMenuButton) {
        element.parentElement.classList.add('is-hidden');
        element.removeAttribute('open');
      }
    });

  }
}
