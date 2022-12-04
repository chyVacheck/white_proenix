
import './App.css';

import { Routes, Navigate, Route } from 'react-router-dom';
//* компоненты
//? основные
import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import ExchangeBuy from '../ExchangeBuy/ExchangeBuy';
import Support from '../Support/Support';
import Footer from '../Footer/Footer.js';

//? page not found or in development
import PageNotFoundOrInDevelopment from '../PageNotFoundOrInDevelopment/PageNotFoundOrInDevelopment';

//? компоненты из Footer
import Policies from '../Policies/Policies';
// компоненты из Policies
import FooterPages from '../FooterPages/FooterPages';

//? авторизация/регистрация
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';

//? pop-up
import PopupInfo from '../PopupInfo/PopupInfo';
import PopupCrypto from '../PopupCrypto/PopupCrypto';

//* хуки
import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';

//* constants
import { popupInfoContent, CryptoContent } from './../../utils/constants.js';


function App() {

  const [isLogined, setIsLogined] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('email@mail.ru');

  //* State for PopupInfo
  const [isPopupInfoImage, setIsPopupInfoImage] = useState(popupInfoContent.images.icon.waiting);
  const [isPopupInfoAlt, setIsPopupInfoAlt] = useState(popupInfoContent.images.alt.waiting);
  const [isPopupInfoMessage, setIsPopupInfoMessage] = useState(popupInfoContent.message.waiting);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = useState(false);

  //* State for PopupCrypto
  const [isPopupCryptoOpen, setIsPopupCryptoOpen] = useState(false);

  //* State for Exchange in home
  const [sendCrypto, setSendCrypto] = useState(CryptoContent.USDT);
  const [resultingCrypto, setResultingCrypto] = useState(CryptoContent.BTC);

  const [sendPopup, setSendPopup] = useState(true);


  const { values: sendValues, handleChange: handleChangeSendValues, setValues: setSendValues } = useForm({
    sendPrice: 1,
    sendType: 'BTC',
  });

  const { values: resulValues, handleChange: handleChangeResulValues /* <- использоваться не будет */, setValues: setResulValues
  } = useForm({
    resulPrice: 1,
    resulType: '',
  });


  function openCryptoPopupSend() {
    setIsPopupCryptoOpen(true);
    setSendPopup(true);
  }

  function openCryptoPopupRes() {
    setIsPopupCryptoOpen(true);
    setSendPopup(false);
  }


  function logOf() {
    setIsLogined(false);
    setCurrentEmail('');
  }

  return (
    <div className="app">

      {/*//? шапка сайта, блок header */}
      <Header
        currentEmail={currentEmail}
        isLogined={isLogined}
        buttonLink='login'
      />

      <Routes>
        {/* основной контент {home} */}
        <Route
          exact
          path="/home"
          element={
            <>
              {/*//? основная часть сайта, блок main */}
              <Home
                sendValue={sendValues.sendPrice}
                sendValueType={sendValues.sendType}
                sendValueInputName={'sendPrice'}
                handleChangeSendValue={handleChangeSendValues}

                resulValue={resulValues.resulPrice}
                openCryptoPopupSend={openCryptoPopupSend}
                openCryptoPopupRes={openCryptoPopupRes}

                sendCrypto={sendCrypto}
                resultingCrypto={resultingCrypto}

                logOf={logOf}
              />
            </>
          }>
        </Route>

        {/* регистрация {register} */}
        <Route
          path='/register'
          element={
            <>
              <Register />
            </>
          }>
        </Route>

        {/* авторизация {login} */}
        <Route
          path='/login'
          element={
            <>
              <Login />
            </>
          }>
        </Route>

        {/* покупка и обмен {exhange_&_Buy} */}
        <Route
          path='/exchange_&_Buy'
          element={
            <>
              <ExchangeBuy
                sendValue={sendValues.sendPrice}
                sendValueType={sendValues.sendType}
                sendValueInputName={'sendPrice'}
                handleChangeSendValue={handleChangeSendValues}

                resulValue={resulValues.resulPrice}
                openCryptoPopupSend={openCryptoPopupSend}
                openCryptoPopupRes={openCryptoPopupRes}

                sendCrypto={sendCrypto}
                resultingCrypto={resultingCrypto}

                logOf={logOf}
              />
            </>
          }>
        </Route>

        {/* поодержка {Support} */}
        <Route
          path='/support'
          element={
            <>
              <Support />
            </>
          }>
        </Route>

        {/* //? из footer */}
        <Route
          path='/:path/:path_second'
          element={
            <FooterPages />
          }>
        </Route>

        {/* политика {Policies} */}
        <Route
          path='/Policies'
          element={
            <>
              <Policies />
            </>
          }>
        </Route>

        {/* все остальное {любой путь кроме выше описанных} */}
        <Route
          // todo не забыть включить обратно
          path="*"
          element={
            <Navigate to="/Page_Not_Found_Or_In_Development" />
          }>
        </Route>

        {/* Страницы нет или в разработке {PageNotFoundOrInDevelopment} */}
        <Route
          path='/Page_Not_Found_Or_In_Development'
          element={
            <>
              <PageNotFoundOrInDevelopment />
            </>
          }>
        </Route>

      </Routes>

      {/*//? подвал сайта, блок footer */}
      <Footer />

      {/*//! pop-up`ы сайта */}
      <PopupInfo
        isOpen={isPopupInfoOpen}
        setIsOpen={setIsPopupInfoOpen}
        img={isPopupInfoImage}
        alt={isPopupInfoAlt}
        message={isPopupInfoMessage}
      />

      <PopupCrypto
        isOpen={isPopupCryptoOpen}
        setIsOpen={setIsPopupCryptoOpen}

        setCurrentCrypto={sendPopup ? setSendCrypto : setResultingCrypto}
      />

    </div >
  );
}

export default App;
