const checkboxIcons = document.querySelectorAll('[data-icon="checkbox"]');
const checkboxInputs = document.querySelectorAll('[data-input="checkbox"]');

const changeIcon = () => {
  checkboxIcons.forEach((item) => {
    const checkboxInput = item
        .closest('label')
        .querySelector('[data-input="checkbox"]');
    if (checkboxInput.checked) {
      if (item.dataset.checked === 'true') {
        item.dataset['hide'] = 'false';
      } else {
        item.dataset['hide'] = 'true';
      }
    } else {
      if (item.dataset.checked === 'true') {
        item.dataset['hide'] = 'true';
      } else {
        item.dataset['hide'] = 'false';
      }
    }
  });
};

const addEventCheckbox = () => {
  checkboxInputs.forEach((item) => {
    item.addEventListener('change', changeIcon);
  });
};

export {addEventCheckbox};
