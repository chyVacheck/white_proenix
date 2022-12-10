
//? стили
import "./App.css";
//* react
import { useState } from "react";
import { Routes, Navigate, Route } from "react-router-dom";

//? основные
import Header from "./../Header/Header.js";

//? защита стр
import ProtecredRouter from "./../ProtectedRouter/ProtectedRouter.js";

//? компонент Footer
import Footer from "../Footer/Footer";
// компоненты из Policies
import FooterPages from "./../../components/FooterPages/FooterPages.js";

//? pop-up`ы
import PopupInfo from "./../Popup/PopupInfo/PopupInfo.js";
import PopupCrypto from "./../Popup/PopupCrypto/PopupCrypto.js";
import PopupValid from "../Popup/PopupValid/PopupValid";

//! страницы
//* main
import { Home, Support, ExchangeBuy, Profile, SiteVersionHistory } from "./../../Pages/Pages.js";

//* footer
import { Policies } from "./../../Pages/Pages.js";

//* для администрации
import { AdminLogin, AdminPanel } from "./../../Pages/Admin/Admin.js";
// import AdminPanel from './../Admin/AdminPanel.js';

//* информационные pages
import {
  PageNotFound,
  YouAreNotLoggedIn,
  PageInDevelopment,
} from "./../../Pages/Pages.js";

//* авторизация/регистрация
import { Register, Login, MailVerification } from "./../../Pages/Pages.js";

//* хуки
import useForm from "./../../hooks/useForm";

//? constants
import { popupInfoContent, CryptoContent } from "./../../utils/constants.js";

function App() {
  const [isLogined, setIsLogined] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  //todo убрать до релиза
  window.setIsLogined = (value) => {
    setIsLogined(value);
  };
  const [currentID, setCurrentID] = useState("email@mail.ru");

  //* State for PopupInfo
  const [isPopupInfoImage, setIsPopupInfoImage] = useState(
    popupInfoContent.images.icon.waiting
  );
  const [isPopupInfoAlt, setIsPopupInfoAlt] = useState(
    popupInfoContent.images.alt.waiting
  );
  const [isPopupInfoMessage, setIsPopupInfoMessage] = useState(
    popupInfoContent.message.waiting
  );
  const [isPopupInfoOpen, setIsPopupInfoOpen] = useState(false);

  //* State for PopupCrypto
  const [isPopupCryptoOpen, setIsPopupCryptoOpen] = useState(false);

  //* State for PopupValid
  const [isPopupValidOpen, setIsPopupValidOpen] = useState(false);
  const [imagePopupValid, setImagePopupValid] = useState(
    popupInfoContent.images.icon.waiting
  );
  const [altPopupValid, setAltPopupValid] = useState(
    popupInfoContent.images.alt.waiting
  );
  const [messagePopupValid, setMessagePopupValid] =
    useState("Waiting Validation");

  //*? State for Exchange in home
  const [sendCrypto, setSendCrypto] = useState(CryptoContent.USDT);
  const [resultingCrypto, setResultingCrypto] = useState(CryptoContent.BTC);

  const [sendPopup, setSendPopup] = useState(true);

  const {
    values: sendValues,
    handleChange: handleChangeSendValues,
    setValues: setSendValues,
  } = useForm({
    sendPrice: 1,
    sendType: "BTC",
  });

  const {
    values: resulValues,
    handleChange: handleChangeResulValues /* <- использоваться не будет */,
    setValues: setResulValues,
  } = useForm({
    resulPrice: 1,
    resulType: "",
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
    setCurrentID("");
  }

  return (
    <div className="app">
      {/*//? шапка сайта, блок header */}
      <Header currentID={currentID} isLogined={isLogined} buttonLink="login" />

      <Routes>
        {/* ввоод пароля для админки {Admin} */}
        <Route
          exact
          path="/Admin"
          element={
            <AdminLogin
              setAdminLogin={setIsAdminLogin}
            />
          }>
        </Route>

        {/* админ панель {AdminPanel} */}
        <Route
          exact
          path="/AdminPanel"
          element={
            <ProtecredRouter loggedIn={isAdminLogin}>
              <AdminPanel
                popupValid={{
                  setIsPopupValidOpen: setIsPopupValidOpen,
                  setImagePopupValid: setImagePopupValid,
                  setAltPopupValid: setAltPopupValid,
                  setMessagePopupValid: setMessagePopupValid,
                }}
              />
            </ProtecredRouter>
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
                sendValueInputName={"sendPrice"}
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
          }
        ></Route>

        {/* регистрация {register} */}
        <Route
          path="/Register"
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
          }
        ></Route>

        {/* авторизация {login} */}
        <Route
          path="/Login"
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
          }
        ></Route>

        {/* авторизация {Mail_Verification} */}
        <Route
          path="/Mail_Verification"
          element={
            <>
              <MailVerification />
            </>
          }
        ></Route>

        {/* покупка и обмен {Exhange_&_Buy} */}
        <Route
          path="/Exchange_&_Buy"
          element={
            <ProtecredRouter loggedIn={isLogined}>
              <ExchangeBuy
                sendValue={sendValues.sendPrice}
                sendValueType={sendValues.sendType}
                sendValueInputName={"sendPrice"}
                handleChangeSendValue={handleChangeSendValues}
                resulValue={resulValues.resulPrice}
                openCryptoPopupSend={openCryptoPopupSend}
                openCryptoPopupRes={openCryptoPopupRes}
                sendCrypto={sendCrypto}
                resultingCrypto={resultingCrypto}
                logOf={logOf}
                popupValid={{
                  setIsPopupValidOpen: setIsPopupValidOpen,
                  setImagePopupValid: setImagePopupValid,
                  setAltPopupValid: setAltPopupValid,
                  setMessagePopupValid: setMessagePopupValid,
                }}
              />
            </ProtecredRouter>
          }
        ></Route>

        {/* поодержка {Support} */}
        <Route
          path="/Support"
          element={
            <>
              <Support
                popupValid={{
                  setIsPopupValidOpen: setIsPopupValidOpen,
                  setImagePopupValid: setImagePopupValid,
                  setAltPopupValid: setAltPopupValid,
                  setMessagePopupValid: setMessagePopupValid,
                }}
              />
            </>
          }
        ></Route>

        {/* //? из Profile */}

        {/* профиль {Profile} */}
        <Route
          path="/Profile"
          element={
            <>
              <ProtecredRouter loggedIn={isLogined}>
                <Profile />
              </ProtecredRouter>
            </>
          }
        ></Route>

        {/* истоиря транзакций {Profile/History} */}
        <Route
          path="/Profile/History"
          element={
            <>
              <ProtecredRouter loggedIn={isLogined}>
                <PageInDevelopment />
              </ProtecredRouter>
            </>
          }
        ></Route>

        {/* //? из footer */}
        <Route path="/:path/:path_second" element={<FooterPages />}></Route>

        {/* политика {Policies} */}
        <Route
          path="/Policies"
          element={
            <>
              <Policies />
            </>
          }
        ></Route>

        {/* //? another Pages */}
        {/* все остальное {любой путь кроме выше описанных} */}
        <Route path="*" element={<Navigate to="/Page_Not_Found" />}></Route>

        {/* //? Info Pages */}
        {/* Страницы нет или в разработке {Page_Not_Found} */}
        <Route
          path="/Page_Not_Found"
          element={
            <>
              <PageNotFound />
            </>
          }
        ></Route>

        {/* у вас нет доступа к этой странице {You_are_not_logged_in} */}
        <Route
          path="/You_are_not_logged_in"
          element={
            <>
              <YouAreNotLoggedIn />
            </>
          }
        ></Route>

        {/* //? история версий сайта {Site_version_history} */}
        {/* у вас нет доступа к этой странице {Site_version_history} */}
        <Route
          path="/Site_version_history"
          element={<SiteVersionHistory />}
          // element={<PageInDevelopment />}
        ></Route>
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

      {/* PopupValid */}
      <PopupValid
        isOpen={isPopupValidOpen}
        setIsOpen={setIsPopupValidOpen}
        img={imagePopupValid}
        alt={altPopupValid}
        message={messagePopupValid}
      />
    </div>
  );
}

export default App;
