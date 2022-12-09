
//? стили
import Pages from './Pages.js';
//* react
import { NavLink } from 'react-router-dom';
//? фото
import src from './../../images/icons/error.svg';

function YouAreNotLoggedIn() {

  const img = {
    src: src,
    alt: 'error',
  }

  return (
    <Pages
      img={img}
      title={"You aren't logged in"}
      message={<> First you must <NavLink to={'/login'} className='pages__link link'>log in</NavLink> to use this page </>}
    />
  )

}

export default YouAreNotLoggedIn;