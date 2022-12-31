
import { errorMesages, images, inputIsCorrect } from './constants';

export function setCustomError(input) {
  const validity = input.validity;
  let errorMesage = '';
  input.setCustomValidity(Error = errorMesage);

  if (validity.tooShort) {
    errorMesage = errorMesages.tooShort;
  }
  // в реальной жизни браузер не дает написать больше текста, чем максимальное количество
  if (validity.tooLong) {
    errorMesage = errorMesages.tooLong;
  }

  if (validity.typeMismatch && input.type === 'url') {
    errorMesage = errorMesages.typeMismatchUrl;
  }

  if (validity.typeMismatch && input.type === 'email') {
    errorMesage = errorMesages.typeMismatchEmail;
  }

  if (validity.valueMissing) {
    errorMesage = errorMesages.valueMissing;
  }

  if (validity.rangeUnderflow) {
    errorMesage = errorMesages.rangeUnderflow;
  }

  if (validity.rangeOverflow) {
    errorMesage = errorMesages.rangeOverflow;
  }

  if (validity.patternMismatch) {
    errorMesage = errorMesages.patternMismatch;
  }

  input.setCustomValidity(Error = errorMesage)
  return errorMesage;
}

export function handleInput(input, popupValid) {
  const validity = input.validity;

  const errorMessage = setCustomError(input);

  if (!validity.valid) {
    popupValid.setImagePopupValid(images.icon.error);
    popupValid.setAltPopupValid(images.alt.error);
    popupValid.setMessagePopupValid(errorMessage);
  } else {
    popupValid.setImagePopupValid(images.icon.complete);
    popupValid.setAltPopupValid(images.alt.complete);
    popupValid.setMessagePopupValid(inputIsCorrect);
  }
}
