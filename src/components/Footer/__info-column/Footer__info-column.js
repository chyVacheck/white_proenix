
import { NavLink } from 'react-router-dom';
import './footer__info-column.css';

function FooterInfoColumn(props) {

  const links = props.links;

  return (
    <article className='footer__info-column'>
      <div className='footer__info-title'>
        {props.title}
      </div>

      {links.map((item, index) => {
        return (
          <NavLink key={index} className='footer__info-link link' to={`/${item.split(" ").join("_")}`}>
            {item}
          </NavLink>
        )
      })}
    </article>
  )
}

export default FooterInfoColumn;