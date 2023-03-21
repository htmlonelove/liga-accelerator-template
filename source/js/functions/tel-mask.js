const inputTel = document.querySelectorAll('[data-input="tel"]');

const onTelMask = () => {
  inputTel.forEach((item) => {
    item.addEventListener('input', (e) => {
      let x = e.target.value.replace(/\D/g, '').match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      e.target.value = '' + (x[1] ? '+' + x[1] : '') + (!x[3] ? x[2] : '(' + x[2] + ')') + (x[3] ? x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')
    });
  });
};

export {onTelMask};
