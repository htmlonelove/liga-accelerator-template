const phoneInputs = document.querySelectorAll('input[data-tel-input]');
const phoneInvalidMassage = document.createElement('span');

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g, "");
}

const onPhoneInput = (evt) => {
  const phoneInput = evt.target;
  const inputNumbersValue = getInputNumbersValue(phoneInput);
  const firstSimbols = "+7";
  const selectionStart = phoneInput.selectionStart;

  if (phoneInput.value.length != selectionStart) {
    if(evt.data && /\D/g.test(evt.data)) {
      phoneInput.value = inputNumbersValue;
    }
    return;
  }

  formattedInputValue = firstSimbols + " ";
    if ( inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
    }

  return phoneInput.value = formattedInputValue;
}

const onPhoneKeyDown = (evt) => {
  const phoneInput = evt.target;
  if(evt.key === 'Backspace' && getInputNumbersValue(phoneInput).length == 1) {
    return phoneInput.value = "";
  }
}

function onPhoneChange (evt) {
  const phoneInput = evt.target;
  if ( phoneInput.value.length < 18 ) {
    phoneLabel = phoneInput.parentElement;

    const form = phoneLabel.parentElement;

    formButton = form.querySelector('button[data-form-button]');
    formButton.setAttribute('disabled', 'disabled');
    phoneInvalidMassage.textContent = "Введите номер телефона полностью";
    phoneLabel.append(phoneInvalidMassage);
  } else {
    formButton.removeAttribute('disabled');
    phoneLabel.removeChild(phoneInvalidMassage);
  }
}

const validatePhoneInput = () => {
  for (let i = 0; i < phoneInputs.length; i++) {
    const phoneInput = phoneInputs[i];
    phoneInput.addEventListener('input', onPhoneInput);
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneChange);
  }
}

validatePhoneInput();
