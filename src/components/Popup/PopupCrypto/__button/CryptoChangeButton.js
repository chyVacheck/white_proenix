
import './CryptoChangeButton.css';
function CryptoChangeButton({ crypto, setCurrentCrypto, closePopup }) {
  function onClick() {
    setCurrentCrypto(crypto);
    closePopup();
  }
  return (
    <li className='cryptoChangeButton'>
      <button
        onClick={onClick}
        type='button'
        className='cryptoChangeButton__button'>
        <img
          className='cryptoChangeButton__image'
          alt={crypto.alt}
          src={crypto.img}
        />
        <span className='cryptoChangeButton__name'>{crypto.alt}</span>
      </button>
      <span className='cryptoChangeButton__fullname'>{crypto.name}</span>
    </li>
  )
}
export default CryptoChangeButton;