
import { NavLink } from 'react-router-dom';
import './Support.css';

function Support() {

  const email = 'whiteproenix@gmail.com';

  function onClick() {
    navigator.clipboard.writeText(email);
    console.log('copied');
  }

  return (
    <article className='support'>
      <div className='support__container'>
        <p className='support__messanger'>
          Please write <span
            onClick={onClick}
            className='support__messanger support__messanger_link link'>
            {email}
          </span>
        </p>
        <p className='support__messanger'>
          Or write to us in a <NavLink
            className='support__messanger support__messanger_link link'
            to={'https://'}>
            telegram
          </NavLink>
        </p>
      </div>
    </article>
  )
}

export default Support;