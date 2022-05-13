export class ScrollTo {
  constructor() {
    this._scrollToElements = document.querySelectorAll('[data-scroll-to-element]');
    this._documentClickHandler = this._documentClickHandler.bind(this);

    this._init();
  }

  _init() {
    if (this._scrollToElements.length) {
      document.addEventListener('click', this._documentClickHandler);
    }
  }

  _documentClickHandler(evt) {

    const target = evt.target;

    if (!target.closest('[data-scroll-to-element]')) {
      return;
    }

    evt.preventDefault();

    this._scrollToElement = target.closest('[data-scroll-to-element]').dataset.scrollToElement;

    if (!this._scrollToElement) {
      return;
    }

    this.scrollTo();
  }

  scrollTo(scrollToElementName = this._scrollToElement) {

    const scrolledToElement = document.querySelector(`[data-scrolled-to-element="${scrollToElementName}"]`);

    if (!scrolledToElement) {
      return;
    }

    document.removeEventListener('click', this._documentClickHandler);

    scrolledToElement.scrollIntoView({behavior: 'smooth'});

    setTimeout(() => {
      document.addEventListener('click', this._documentClickHandler);
    }, this._eventTimeout);
  }
}
