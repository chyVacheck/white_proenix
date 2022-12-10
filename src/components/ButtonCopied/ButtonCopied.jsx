
//? стили
import './ButtonCopied.css';
//? фото
import { images } from "../../utils/constants";

function ButtonCopied({ popupValid, text, className, message = 'Copied', children }) {

  function onClick() {
    navigator.clipboard.writeText(text);
    setTimeout(() => { popupValid.setIsPopupValidOpen(false); }, 1500);
    popupValid.setImagePopupValid(images.icon.complete);
    popupValid.setAltPopupValid(images.alt.complete);
    popupValid.setMessagePopupValid(message);
    popupValid.setIsPopupValidOpen(true);
  }

  return (
    <button onClick={onClick} className={'buttonCopied ' + className}>
      {children}
    </button>
  )
}

export default ButtonCopied;