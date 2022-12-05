
//? картинка
import logo from './../../images/Logo.svg';
import userIcon from './../../images/Union.svg';

//? стили
import './Header.css';

//? другие компоненты
import HeaderNavlink from './__navlink/HeaderNavlink';
import HeaderButton from './__button/HeaderButton.js';

//? вспомогательны
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function Header({ currentEmail, isLogined = false }) {

  const navigate = useNavigate();
  let location = useLocation();
  const page = location.pathname;

  function onClick() {
    navigate('/Profile');
  }

  return (
    <header className={page === '/Home' ? 'header header_home' : ' header'}>

      <NavLink to={`/Home`}>
        <img alt="White Proenix" className='header__logo' src={logo} />
      </NavLink>

      <nav className='header__navigation'>

        <HeaderNavlink
          page={page}
          text={'Home'}
        />

        <HeaderNavlink
          page={page}
          text={'Exchange & Buy'}
        />

        <HeaderNavlink
          page={page}
          text={'Support'}
        />
      </nav>

      <div className='header__email-button'>
        {isLogined ?
          <div onClick={onClick} className='header__email'>
            {currentEmail}
            <img className='header__email-icon' alt='user icon' src={userIcon} />
          </div> :
          <HeaderButton
            page={page}
            isLogined={isLogined}
          />
        }
      </div>

    </header>
  )
}

export default Header;