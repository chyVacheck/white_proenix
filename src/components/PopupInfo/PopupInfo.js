
import './PopupInfo.css';

function PopupInfo({ isOpen, setIsOpen, img, alt, message, onClose }) {

  function onClick() {
    onClose(isOpen, setIsOpen);
  }

  return (
    <section id={`popupInfo`} className={isOpen ? 'popupInfo popupInfo_opened' : 'popupInfo'}>
      <article id={`popupInfo-container`} className="popupInfo__container popupInfo__container_biger">
        <img
          src={img}
          className="popupInfo__img"
          alt={alt}
        />
        <p className="popupInfo__message">
          {message}
        </p>
        <button
          aria-label="закрыть окно pop-up"
          type="button"
          id={`popupInfo-button-close`}
          className="popupInfo__close-button button"
          onClick={onClick}
        ></button>
      </article>
    </section>
  )
}

export default PopupInfo;