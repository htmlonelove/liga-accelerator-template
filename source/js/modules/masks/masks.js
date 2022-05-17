export class Masks {
  constructor() {
    this._maskElements = document.querySelectorAll('[data-phone-mask]');
    this._documentInputHandler = this._documentInputHandler.bind(this);
    this._init();
  }

  _init() {
    if (this._maskElements.length) {
      this.createMasks(this._maskElements);
    }
  }

  createMasks(maskElements) {
    maskElements.forEach((element) => {
      let maskValue = element.dataset.phoneMask;
      element.setAttribute('maxlength', maskValue.length);
      element.addEventListener('keyup', (evt) => {
        this._documentInputHandler(evt);
      });
    });
  }

  _documentInputHandler(evt) {

    const target = evt.target;

    switch (evt.key) {
      case 'CapsLock':
      case 'Control':
      case 'Shift':
      case 'Alt':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'Tab':
        return;
    }

    target.value = this.checkCurrentValue(evt);

  }

  checkCurrentValue(evt) {
    let mask = evt.target.dataset.phoneMask;
    let maskLength = mask.length;
    let i;
    let j;
    let value = evt.target.value;
    let newValue = '';

    let regexpValue = value.replace(/(\+7)*\D/g, '');
    j = 0;
    for (i = 0; i < maskLength; i++) {
      let isInt = !isNaN(parseInt(regexpValue[j], 10));

      if (isInt && mask[i] === '_') {
        newValue += regexpValue[j++];
      } else if (!isInt && mask[i] === '_') {
        return newValue;
      } else {
        newValue += mask[i];
      }
      if (typeof regexpValue[j] === 'undefined') {
        break;
      }
    }
    return newValue;
  }
}
