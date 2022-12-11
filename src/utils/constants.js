
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
import { HowItWorks } from './../Pages/Pages.js';
//? Pages Features
// import { } from './../Pages/Pages.js';
//? Pages Patrtner with us
// import { } from './../Pages/Pages.js';
//? Pages Policies
import { TermsOfService, PrivacyPolicy, CoockiePolicy, AMLPolicy } from './../Pages/Pages.js';
//? Pages Support Center
// import { } from './../Pages/Pages.js';
//? Page in development
import { PageInDevelopment } from './../Pages/Pages.js';

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

const Pages = { //todo добавить остальные страницы
  //? About us
  '/About_us/How_it_works': <HowItWorks />,
  '/About_us/Fees': <PageInDevelopment />,
  //? Features
  '/Features/Exchange': <PageInDevelopment />,
  '/Features/VPM': <PageInDevelopment />,
  '/Features/Live_Prices': <PageInDevelopment />,
  //? Patrtner with us
  '/Patrtner_with_us/Integrate_our_API': <PageInDevelopment />,
  '/Patrtner_with_us/Become_an_Affiliate': <PageInDevelopment />,
  '/Patrtner_with_us/Share_your_proposal': <PageInDevelopment />,
  '/Patrtner_with_us/Start_your_career': <PageInDevelopment />,
  //? Policies
  '/Policies/Terms_of_Service': <TermsOfService />,
  '/Policies/Privacy_Policy': <PrivacyPolicy />,
  '/Policies/Coockie_Policy': <CoockiePolicy />,
  '/Policies/AML_Policy': <AMLPolicy />,
  //? Support Center
  '/Support_Center/Explore_FAQ': <PageInDevelopment />,
  '/Support_Center/Contact_Us': <PageInDevelopment />,
  '/Support_Center/Sent_Feedback': <PageInDevelopment />,
}

const CryptoContent = {
  'BTC': {
    img: imagePopupCryptoBTC,
    img_g: imagePopupCryptoBTCG,
    alt: 'BTC',
    name: 'Bitcoin',
    fullName: 'Bitcoin',
    addres: 'bc1q6r2qmmp5g7prthvu4kemhnt5thhaxfp4qpj79g',
    time: {
      "ETH": '30-50',
      "USDT": '35 - 40 ',
      "MATIC": '30 - 40 ',
      "NEXO": '25 - 35 ',
      "BNB": '40 - 60 ',
      "TRX": '25 - 30',
    },
  },
  'BNB': {
    img: imagePopupCryptoBNB,
    img_g: imagePopupCryptoBNBG,
    alt: 'BNB',
    name: 'Binance Coin',
    fullName: 'Binance USD',
    addres: '0xb9522DEa819F2CCdEF2D7b3CdCAE56c782E724b3',
    time: {
      "BTC": '40 - 60',
      "ETH": '40 - 60',
      "USDT": '25 - 40',
      "MATIC": '30 - 45',
      "NEXO": '34 - 55',
      "TRX": '25 - 30',
    },
  },
  'ETH': {
    img: imagePopupCryptoETH,
    img_g: imagePopupCryptoETHG,
    alt: 'ETH',
    name: 'Ethereum',
    fullName: 'Etherium',
    addres: '0xb9522DEa819F2CCdEF2D7b3CdCAE56c782E724b3',
    time: {
      "BTC": '30 - 50',
      "USDT": '20 - 35',
      "MATIC": '25 - 40',
      "NEXO": '25 - 40',
      "BNB": '40 - 60 ',
      "TRX": '20 - 35',
    },
  },
  'MATIC': {
    img: imagePopupCryptoMATIC,
    img_g: imagePopupCryptoMATICG,
    alt: 'MATIC',
    name: 'Polygon',
    fullName: 'Matic',
    addres: '0xb9522DEa819F2CCdEF2D7b3CdCAE56c782E724b3',
    time: {
      "BTC": '24 - 30',
      "ETH": '18 - 23',
      "USDT": '15 - 20',
      "NEXO": '14 - 21',
      "BNB": '30 - 45',
      "TRX": '17 - 20',
    },
  },
  'NEXO': {
    img: imagePopupCryptoNEXO,
    img_g: imagePopupCryptoNEXOG,
    alt: 'NEXO',
    name: 'Nexo',
    fullName: 'Nexo',
    addres: '0xb9522DEa819F2CCdEF2D7b3CdCAE56c782E724b3',
    time: {
      "BTC": '25 - 35',
      "ETH": '25 - 40',
      "USDT": '15 - 20',
      "MATIC": '20 - 30',
      "BNB": '34 - 55',
      "TRX": '17 - 25',
    },
  },
  'TRX': {
    img: imagePopupCryptoTRX,
    img_g: imagePopupCryptoTRXG,
    alt: 'TRX',
    name: 'TRON',
    fullName: 'TRON',
    addres: 'TVsnofjGQAVoyojTtudAda9eqi22QQAres',
    time: {
      "BTC": '25 - 30',
      "ETH": '20 - 35',
      "USDT": '10 - 15',
      "MATIC": '17 - 20',
      "NEXO": '17 - 25',
      "BNB": '25 - 30',
    },
  },
  'USDT': {
    img: imagePopupCryptoUSDT,
    img_g: imagePopupCryptoUSDTG,
    alt: 'USDT',
    name: 'Tether USD',
    fullName: 'Tether USD',
    addres: 'TVsnofjGQAVoyojTtudAda9eqi22QQAres',
    time: {
      "BTC": '20 - 35',
      "ETH": '25 - 40',
      "MATIC": '17 - 20',
      "NEXO": '15 - 20',
      "BNB": '25 - 40',
      "TRX": '10 - 15',
    },
  }
}

export const ADMIN_PASSWORD = '';
export const EMAIL_OF_SITE = 'white_phoenix@phoenixw.com';

export const errorMesages = {
  tooShort: 'Input is too short',
  tooLong: 'Input is too long',
  typeMismatchUrl: 'Enter the link to the image',
  valueMissing: 'It remains to fill in',
  rangeUnderflow: 'You need to enter a number greater than now',
  rangeOverflow: 'You need to enter a number less than now',
  typeMismatchEmail: 'You need to enter the email',
}

export const formLogin = {
  inputSelector: '.field__input',
  submitButtonSelector: '#sign-in-submit-button',
  buttonClass: 'button',
};

export const inputIsCorrect = 'Input is correct';
export { CryptoContent, imageWaiting, imageError, images, imagePopupInfoComplete };
export default Pages;