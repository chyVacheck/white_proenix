
import './App.css';

import { Routes, Navigate, Route } from 'react-router-dom';
//* компоненты
//? для администрации
import { AdminLogin } from './../Admin/Admin.js';
// import AdminPanel from './../Admin/AdminPanel.js';

//? основные
import Header from './../Header/Header.js';
import Home from './../Home/Home.js';
import ExchangeBuy from './../ExchangeBuy/ExchangeBuy';
import Support from './../Support/Support';
import Footer from './../Footer/Footer.js';
import Profile from './../Profile/Profile.js';

//? защита стр
import ProtecredRouter from './../ProtectedRouter/ProtectedRouter.js';

//? компоненты из Footer
import Policies from './../Policies/Policies';
// компоненты из Policies
import FooterPages from './../FooterPages/FooterPages';

//? авторизация/регистрация
import Register from './../Register/Register.js';
import Login from './../Login/Login.js';
import MailVerification from './../MailVerification/MailVerification.js';

//? pop-up
import PopupInfo from './../Popup/PopupInfo/PopupInfo.js';
import PopupCrypto from './../Popup/PopupCrypto/PopupCrypto.js';
import PopupValid from '../Popup/PopupValid/PopupValid';

//* info pages
import PageNotFoundOrInDevelopment from './../../Pages/Info/PageNotFoundOrInDevelopment.js';
import YouAreNotLoggedIn from './../../Pages/Info/YouAreNotLoggedIn.js';

//* хуки
import { useState } from 'react';
import useForm from './../../hooks/useForm';

//* constants
import { popupInfoContent, CryptoContent } from './../../utils/constants.js';


function App() {

  const [isLogined, setIsLogined] = useState(false);
  window.setIsLogined = ((value) => { setIsLogined(value) });
  const [currentEmail, setCurrentEmail] = useState('email@mail.ru');

  //* State for PopupInfo
  const [isPopupInfoImage, setIsPopupInfoImage] = useState(popupInfoContent.images.icon.waiting);
  const [isPopupInfoAlt, setIsPopupInfoAlt] = useState(popupInfoContent.images.alt.waiting);
  const [isPopupInfoMessage, setIsPopupInfoMessage] = useState(popupInfoContent.message.waiting);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = useState(false);

  //* State for PopupCrypto
  const [isPopupCryptoOpen, setIsPopupCryptoOpen] = useState(false);

  //* State for PopupValid
  const [isPopupValidOpen, setIsPopupValidOpen] = useState(false);
  const [imagePopupValid, setImagePopupValid] = useState(popupInfoContent.images.icon.waiting);
  const [altPopupValid, setAltPopupValid] = useState(popupInfoContent.images.alt.waiting);
  const [messagePopupValid, setMessagePopupValid] = useState('Waiting Validation');


  //*? State for Exchange in home
  const [sendCrypto, setSendCrypto] = useState(CryptoContent.USDT);
  const [resultingCrypto, setResultingCrypto] = useState(CryptoContent.BTC);

  const [sendPopup, setSendPopup] = useState(true);


  const { values: sendValues, handleChange: handleChangeSendValues, setValues: setSendValues } = useForm({
    sendPrice: 1,
    sendType: 'BTC',
  });

  const { values: resulValues, handleChange: handleChangeResulValues /* <- использоваться не будет */, setValues: setResulValues } = useForm({
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

        {/* ввоод пароля для админки {Admin} */}
        <Route
          exact
          path="/Admin"
          element={
            <AdminLogin />
          }>
        </Route>

        {/* основной контент {/Home} */}
        <Route
          exact
          path="/Home"
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

                setResultingCrypto={setResultingCrypto}

                logOf={logOf}
              />
            </>
          }>
        </Route>

        {/* регистрация {register} */}
        <Route
          path='/Register'
          element={
            <>
              <Register
                popupValid={{
                  setIsPopupValidOpen: setIsPopupValidOpen,
                  setImagePopupValid: setImagePopupValid,
                  setAltPopupValid: setAltPopupValid,
                  setMessagePopupValid: setMessagePopupValid,
                }}
              />
            </>
          }>
        </Route>

        {/* авторизация {login} */}
        <Route
          path='/Login'
          element={
            <>
              <Login
                popupValid={{
                  setIsPopupValidOpen: setIsPopupValidOpen,
                  setImagePopupValid: setImagePopupValid,
                  setAltPopupValid: setAltPopupValid,
                  setMessagePopupValid: setMessagePopupValid,
                }}
              />
            </>
          }>
        </Route>

        {/* авторизация {Mail_Verification} */}
        <Route
          path='/Mail_Verification'
          element={
            <>
              <MailVerification />
            </>
          }>
        </Route>

        {/* покупка и обмен {exhange_&_Buy} */}
        <Route
          path='/Exchange_&_Buy'
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
          path='/Support'
          element={
            <>
              <Support />
            </>
          }>
        </Route>

        {/* поодержка {Profile} */}
        <Route
          path='/Profile'
          element={
            <>
              <ProtecredRouter
                loggedIn={isLogined}
              >
                <Profile />
              </ProtecredRouter>
            </>
          }>
        </Route>

        {/* //? из footer */}
        <Route
          exact
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
          path="*"
          element={
            <Navigate to="/Page_Not_Found_Or_In_Development" />
          }>
        </Route>

        {/* //? Info Pages */}
        {/* Страницы нет или в разработке {Page_Not_Found_Or_In_Development} */}
        <Route
          path='/Page_Not_Found_Or_In_Development'
          element={
            <>
              <PageNotFoundOrInDevelopment />
            </>
          }>
        </Route>

        {/* у вас нет доступа к этой странице {You_are_not_logged_in} */}
        <Route
          path='/You_are_not_logged_in'
          element={
            <>
              <YouAreNotLoggedIn />
            </>
          }>
        </Route>


      </Routes>

      {/*//? подвал сайта, блок footer */}
      <Footer />

      {/*//! pop-up`ы сайта */}
      {/* PopupInfo */}
      <PopupInfo
        isOpen={isPopupInfoOpen}
        setIsOpen={setIsPopupInfoOpen}
        img={isPopupInfoImage}
        alt={isPopupInfoAlt}
        message={isPopupInfoMessage}
      />

      {/* PopupCrypto */}
      <PopupCrypto
        isOpen={isPopupCryptoOpen}
        setIsOpen={setIsPopupCryptoOpen}
        setCurrentCrypto={sendPopup ? setSendCrypto : setResultingCrypto}
      />

      <PopupValid
        isOpen={isPopupValidOpen}
        setIsOpen={setIsPopupValidOpen}
        img={imagePopupValid}
        alt={altPopupValid}
        message={messagePopupValid}

      />

    </div >
  );
}

export default App;
