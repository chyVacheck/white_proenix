
import { NavLink } from 'react-router-dom';
import './HeaderNavlink.css';

function HeaderNavlink({ page, text }) {
  const link = text.split(" ").join("_")
  const className = ('/' + link) === page ? 'header__navigation-link link header__navigation-link_active' : 'header__navigation-link link';

  return (
    <NavLink className={className} to={`/${link}`}>{text}</NavLink>
  )
}

export default HeaderNavlink;