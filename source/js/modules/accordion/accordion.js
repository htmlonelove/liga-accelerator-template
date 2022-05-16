export class Accordion {
  constructor() {
    this._expandMenuButtons = document.querySelectorAll('[data-expand-menu-button]');
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._eventTimeout = 400;

    this._init();
  }

  _init() {

    if (this._expandMenuButtons.length) {
      document.addEventListener('click', this._documentClickHandler);
      this._expandMenuButtons.forEach((element) => {
        this.closeSingleElement(element.dataset.expandMenuButton);
      });
    }
  }

  _documentClickHandler(evt) {

    const target = evt.target;

    if (!target.closest('[data-expand-menu-button]')) {
      return;
    }

    const expandButtonElement = target.closest('[data-expand-menu-button]');

    evt.preventDefault();

    this._siblingsToToggle = expandButtonElement.dataset.expandMenuButton;
    this._clickedButton = expandButtonElement;

    if (!this._siblingsToToggle) {
      return;
    }

    this.toggleElements();
  }

  closeSingleElement(elementToToggle) {

    const toggleElements = document.querySelectorAll(`[data-hide-footer-element="${elementToToggle}"]`);
    if (!toggleElements.length) {
      return;
    }
    document.querySelector(`[data-expand-menu-button="${elementToToggle}"]`).classList.add('is-hidden');
    document.removeEventListener('click', this._documentClickHandler);

    toggleElements.forEach((element) => {
      element.classList.add('is-hidden');
    });

    setTimeout(() => {
      document.addEventListener('click', this._documentClickHandler);
    }, this._eventTimeout);

  }

  openSingleElement(elementToToggle) {

    const toggleElements = document.querySelectorAll(`[data-hide-footer-element="${elementToToggle}"]`);
    if (!toggleElements.length) {
      return;
    }

    document.querySelector(`[data-expand-menu-button="${elementToToggle}"]`).classList.remove('is-hidden');
    document.removeEventListener('click', this._documentClickHandler);

    toggleElements.forEach((element) => {
      element.classList.remove('is-hidden');
    });

    setTimeout(() => {
      document.addEventListener('click', this._documentClickHandler);
    }, this._eventTimeout);

  }


  toggleElements(siblingsToToggle = this._siblingsToToggle, thisButton = this._clickedButton) {

    this._expandMenuButtons.forEach((element) => {
      let currentElementData = element.dataset.expandMenuButton;
      if (currentElementData !== siblingsToToggle) {
        this.closeSingleElement(element.dataset.expandMenuButton);
      }
    });

    if (thisButton.classList.contains('is-hidden')) {
      this.openSingleElement(siblingsToToggle);
    } else {
      this.closeSingleElement(siblingsToToggle);
    }

  }
}
