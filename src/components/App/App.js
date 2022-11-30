
import './App.css';

import { Routes, Navigate, Route } from 'react-router-dom';
//* компоненты
//? основные
import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import ExchangeBuy from '../ExchangeBuy/ExchangeBuy';
import Support from '../Support/Support';
import Footer from '../Footer/Footer.js';

//? компоненты из футера
import Policies from '../Policies/Policies';
import HowItWorks from '../HowItWorks/HowItWorks';

//? авторизация/регистрация
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';

//? pop-up
import PopupInfo from '../PopupInfo/PopupInfo';

//* хуки
import { useState } from 'react';

//? constants
import { popupInfoContent } from './../../utils/constants.js';

function App() {

  const [isLogined, setIsLogined] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('email@mail.ru');

  //* State for PopupInfo
  const [isPopupInfoOpen, setIsPopupInfoOpen] = useState(true);
  const [isPopupInfoImage, setIsPopupInfoImage] = useState(popupInfoContent.images.icon.waiting);
  const [isPopupInfoAlt, setIsPopupInfoAlt] = useState(popupInfoContent.images.alt.waiting);
  const [isPopupInfoMessage, setIsPopupInfoMessage] = useState(popupInfoContent.message.waiting);

  //? функция закрытия pop-up`ов
  function closePopup(state, setState) {
    setState(!state);
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
              <ExchangeBuy />
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

        {/* как это работает {Policies} */}
        <Route
          path='/policies'
          element={
            <>
              <Policies />
            </>
          }>
        </Route>

        {/* как это работает {How_it_works} */}
        <Route
          path='/how_it_works'
          element={
            <>
              <HowItWorks />
            </>
          }>
        </Route>

        {/* все остальное {любой путь кроме выше описанных} */}
        <Route
          // todo не забыть включить обратно
          path=""
          element={
            <Navigate to="/home" />
          }>
        </Route>

      </Routes>

      {/*//? подвал сайта, блок footer */}
      <Footer />

      {/*//! pop-up`ы сайта */}
      <PopupInfo
        isOpen={isPopupInfoOpen}
        img={isPopupInfoImage}
        alt={isPopupInfoAlt}
        message={isPopupInfoMessage}
        onClose={closePopup}
        setIsOpen={setIsPopupInfoOpen}
      />
    </div >
  );
}

export default App;
