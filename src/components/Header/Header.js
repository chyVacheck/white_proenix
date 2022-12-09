
//? стили
import './Header.css';
//* react
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
//? картинка
import logo from './../../images/Logo.png';
import userIcon from './../../images/user/User.svg';

//? компоненты
// личные
import HeaderNavlink from './__navlink/HeaderNavlink.js';
import HeaderButton from './__button/HeaderButton.js';

function Header({ currentID, isLogined = false }) {

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
            {currentID}
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