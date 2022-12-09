
//? стили
import './Popup.css';

function Popup({ small, name, isOpen, setIsOpen, children, ...props }) {

  function onClose() {
    setIsOpen(false);
  }
  
  const classPopup = small ? 'popup popup-small' : 'popup';
  const classButton = small ? 'popup-small__close-button popup__close-button button' : 'popup__close-button button';
  const classContainer = props.className + " popup__container";

  return (
    <section id={`popup-${name}`} className={isOpen ? classPopup + ' popup_opened' : classPopup}>
      <article onClick={small ? onClose : undefined} id={`popup-container`} className={classContainer}>
        {children}
        <button
          aria-label="закрыть окно pop-up"
          type="button"
          id={`popup-button-close`}
          className={classButton}
          onClick={onClose}
        />
      </article>
    </section>
  )
}

export default Popup;