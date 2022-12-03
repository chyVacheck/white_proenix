
import './PopupInfo.css';
import Popup from './../Popup/Popup.js';

function PopupInfo({ isOpen, setIsOpen, img, alt, message }) {

  window.PopupInfo = setIsOpen;

  return (
    <Popup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className={'popupInfo'}
    >
      <img
        className="popupInfo__img"
        src={img}
        alt={alt}
      />
      <p className="popupInfo__message">
        {message}
      </p>
    </Popup>
  )
}

export default PopupInfo;