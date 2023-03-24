const nameForms = document.querySelectorAll('[data-input="name"]');
const telForms = document.querySelectorAll('[data-input="tel"]');
const formCheckboxes = document.querySelectorAll('[data-input="checkbox"]');

const validForms = () => {
  nameForms.forEach((item) => {
    item.addEventListener('invalid', () => {
      item.setCustomValidity('Введите ваше Имя!');
    });
  });
  telForms.forEach((item) => {
    item.addEventListener('invalid', () => {
      item.setCustomValidity('Введите ваш номер телефона!');
    });
  });
  formCheckboxes.forEach((item) => {
    item.addEventListener('invalid', () => {
      item.setCustomValidity('Тыкните пожалуйста!');
    });
  });
};

export {validForms};
