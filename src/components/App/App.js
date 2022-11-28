
import './App.css';

import { Routes, Navigate, Route } from 'react-router-dom';
//? components
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';

function App() {
  return (
    <div className="app">
      {/*//? Шапка сайта, блок Header */}
      <Header />

      <Routes>
        {/* основной контент */}
        <Route
          exact
          path="/"
          element={
            <>
              {/*//? основная часть сайта, блок main */}
              <Main />
            </>
          }>
        </Route>

        {/* регистрация */}
        <Route
          path='/signup'
          element={
            <Register />
          }>
        </Route>

        {/* авторизация */}
        <Route
          path='/signin'
          element={
            <Login />
          }>
        </Route>

        {/* все остальное */}
        <Route
          path="*"
          element={
            <Navigate to="/" />
          }>
        </Route>

      </Routes>

      {/*//? подвал сайта, блок footer */}
      <Footer />
    </div>
  );
}

export default App;
