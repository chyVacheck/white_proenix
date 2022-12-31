
//? стили
import './Support.css';
//* react
import { NavLink } from 'react-router-dom';
//? компоненты
import { ButtonCopied } from './../../../components/Components.js';
//* константы
import { EMAIL_OF_SITE } from '../../../utils/constants';

function Support({ popupValid }) {

  return (
    <article className='support'>
      <div className='support__container'>
        <p className='support__messanger'>
          Please write <ButtonCopied popupValid={popupValid} text={EMAIL_OF_SITE} className='support__messanger support__messanger_link link'>
            {EMAIL_OF_SITE}
          </ButtonCopied>
        </p>
        <p className='support__messanger'>
          Or write to us in a <a
            target="_blank"
            rel="noreferrer"
            className='support__messanger support__messanger_link link'
            href={'https://web.telegram.org/k/'}>
            telegram
          </a>
        </p>
      </div>
    </article>
  )
}

export default Support;