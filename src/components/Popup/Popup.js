import './Popup.css';

function Popup({ name, isOpen, setIsOpen, children, ...props }) {

  function onClose() {
    setIsOpen(false);
  }

  const className = props.className + " popup__container"

  return (
    <section id={`popup-${name}`} className={isOpen ? 'popup popup_opened' : 'popup'}>
      <article id={`popup-container`} className={className}>
        {children}
        <button
          aria-label="закрыть окно pop-up"
          type="button"
          id={`popup-button-close`}
          className="popup__close-button button"
          onClick={onClose}
        ></button>
      </article>
    </section>
  )
}

export default Popup;