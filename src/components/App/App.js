
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
import HowItWorks from '../HowItWorks/HowItWorks';
import Policies from '../Policies/Policies';

//? авторизация/регистрация
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
//? хуки
import { useState } from 'react';

function App() {

  const [isLogined, setIsLogined] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('email@mail.ru');


  function logOf() {
    setIsLogined(false);
    setCurrentEmail('');
  }

  return (
    <div className="app">

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
    </div >
  );
}

export default App;
