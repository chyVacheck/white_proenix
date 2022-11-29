
//? картинка
import logo from './../../images/Logo.svg';
import userIcon from './../../images/Union.svg';

//? стили
import './Header.css';

//? другие компоненты
import HeaderNavlink from './__navlink/HeaderNavlink';
import HeaderButton from './__button/HeaderButton.js';

//? вспомогательны
import { NavLink, useLocation } from 'react-router-dom';

function Header({ currentEmail, isLogined = false }) {

  let location = useLocation();
  const page = location.pathname;

  return (
    <header className='header'>

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
          <div className='header__email'>
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