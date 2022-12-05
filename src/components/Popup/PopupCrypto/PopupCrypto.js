
import './PopupCrypto.css';
import Popup from '../Popup.js';
import CryptoChangeButton from './__button/CryptoChangeButton.js';
import { CryptoContent as images } from '../../../utils/constants';

function PopupCrypto({ isOpen, setIsOpen, setCurrentCrypto }) {

  window.PopupCrypto = setIsOpen;

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <Popup
      name={'crypto'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <article className='popupCrypto'>

        <div className='popupCrypto__choose'>
          <ul className='popupCrypto__list'>

            <CryptoChangeButton
              crypto={images.BTC}
              setCurrentCrypto={setCurrentCrypto}
              closePopup={closePopup}
            />

            <CryptoChangeButton
              crypto={images.ETH}
              setCurrentCrypto={setCurrentCrypto}
              closePopup={closePopup}
            />
            <CryptoChangeButton
              crypto={images.USDT}
              setCurrentCrypto={setCurrentCrypto}
              closePopup={closePopup}
            />
            <CryptoChangeButton
              crypto={images.MATIC}
              setCurrentCrypto={setCurrentCrypto}
              closePopup={closePopup}
            />
            <CryptoChangeButton
              crypto={images.NEXO}
              setCurrentCrypto={setCurrentCrypto}
              closePopup={closePopup}
            />
            <CryptoChangeButton
              crypto={images.BNB}
              setCurrentCrypto={setCurrentCrypto}
              closePopup={closePopup}
            />
            <CryptoChangeButton
              crypto={images.TRX}
              setCurrentCrypto={setCurrentCrypto}
              closePopup={closePopup}
            />
          </ul>
        </div>

      </article>
    </Popup>
  )
}

export default PopupCrypto;