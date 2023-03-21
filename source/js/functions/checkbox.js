const checkboxIcons = document.querySelectorAll('[data-icon="checkbox"]');
const checkboxInputs = document.querySelectorAll('[data-input="checkbox"]');

const changeIcon = () => {
  checkboxIcons.forEach((item) => {
    const checkboxInput = item
        .closest('label')
        .querySelector('[data-input="checkbox"]');
    if (checkboxInput.checked) {
      if (item.dataset.checked === 'true') {
        item.classList.remove('checkbox-icon--hide');
      } else {
        item.classList.add('checkbox-icon--hide');
      }
    } else {
      if (item.dataset.checked === 'true') {
        item.classList.add('checkbox-icon--hide');
      } else {
        item.classList.remove('checkbox-icon--hide');
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
