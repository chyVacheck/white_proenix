
//? стили
import './PopupValid.css';
//* react
import { useEffect, useState } from 'react';
import Popup from '../Popup.js';

function PopupValid({ isOpen, setIsOpen, img, alt, message }) {

  window.PopupValid = setIsOpen;
  const [classMod, setClassMod] = useState(true);

  useEffect(() => {
    setClassMod('popupValid_' + alt.toLowerCase());
  }, [alt])

  return (
    <Popup
      small={true}
      name={'valid'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className={'popupValid ' + classMod}
    >
      <p className="popupValid__message">
        {message}
      </p>
      <img
        className="popupValid__image"
        src={img}
        alt={alt}
      />
    </Popup>
  )
}

export default PopupValid;