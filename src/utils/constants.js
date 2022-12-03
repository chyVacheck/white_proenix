
//? картинки для PopupInfo
import imagePopupInfoComplete from './../images/icons/complete.svg';
import imageWaiting from './../images/icons/waiting.svg';
import imageError from './../images/icons/error.svg';

//? картинки для PopupCrypto
import imagePopupCryptoBTC from './../images/crypto/btc.svg';
import imagePopupCryptoBTCG from './../images/crypto/btc_gold.svg';
import imagePopupCryptoBNB from './../images/crypto/bnb.svg';
import imagePopupCryptoBNBG from './../images/crypto/bnb_gold.svg';
import imagePopupCryptoETH from './../images/crypto/eth.svg';
import imagePopupCryptoETHG from './../images/crypto/eth_gold.svg';
import imagePopupCryptoMATIC from './../images/crypto/matic.svg';
import imagePopupCryptoMATICG from './../images/crypto/matic_gold.svg';
import imagePopupCryptoNEXO from './../images/crypto/nexo.svg';
import imagePopupCryptoNEXOG from './../images/crypto/nexo_gold.svg';
import imagePopupCryptoTRX from './../images/crypto/trx.svg';
import imagePopupCryptoTRXG from './../images/crypto/trx_gold.svg';
import imagePopupCryptoUSDT from './../images/crypto/usdt.svg';
import imagePopupCryptoUSDTG from './../images/crypto/usdt_gold.svg';


//? Pages About us
import HowItWorks from './../Pages/HowItWoks';

//? Pages Features

//? Pages Patrtner with us

//? Pages Policies
import TermsOfService from './../Pages/TermsOfService.js';
import PrivacyPolicy from './../Pages/PrivacyPolicy.js';
import CoockiePolicy from './../Pages/CoockiePolicy';
import AMLPolicy from './../Pages/AMLPolicy.js';

//? Pages Support Center


const images = {
  icon: {
    complete: imagePopupInfoComplete,
    waiting: imageWaiting,
    error: imageError,
  },
  alt: {
    complete: 'Complete',
    waiting: 'Waiting',
    error: 'Error',
  }
}

export const popupInfoContent = {
  images: images,
  message: {
    complete: 'Complete',
    waiting: 'Waiting',
    error: 'Error',
  }
}

const Pages = {
  '/About_us/How_it_works': <HowItWorks />,
  '/About_us/Fees': '',



  '/Policies/Terms_of_Service': <TermsOfService />,
  '/Policies/Privacy_Policy': <PrivacyPolicy />,
  '/Policies/Coockie_Policy': <CoockiePolicy />,
  '/Policies/AML_Policy': <AMLPolicy />,



}

const CryptoContent = {
  'BTC': {
    img: imagePopupCryptoBTC,
    img_g: imagePopupCryptoBTCG,
    alt: 'BTC',
    name: 'Bitcoin'
  },
  'BNB': {
    img: imagePopupCryptoBNB,
    img_g: imagePopupCryptoBNBG,
    alt: 'BNB',
    name: 'Binance Coin'
  },
  'ETH': {
    img: imagePopupCryptoETH,
    img_g: imagePopupCryptoETHG,
    alt: 'ETH',
    name: 'Ethereum'
  },
  'MATIC': {
    img: imagePopupCryptoMATIC,
    img_g: imagePopupCryptoMATICG,
    alt: 'MATIC',
    name: 'Polygon'
  },
  'NEXO': {
    img: imagePopupCryptoNEXO,
    img_g: imagePopupCryptoNEXOG,
    alt: 'NEXO',
    name: ''
  },
  'TRX': {
    img: imagePopupCryptoTRX,
    img_g: imagePopupCryptoTRXG,
    alt: 'TRX',
    name: 'TRON'
  },
  'USDT': {
    img: imagePopupCryptoUSDT,
    img_g: imagePopupCryptoUSDTG,
    alt: 'USDT',
    name: 'Tether USD'
  }
}


export { CryptoContent };
export default Pages;