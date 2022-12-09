
//? стили
import './FooterPages.css';
//* react 
import { useLocation } from 'react-router-dom';

//? страницы
// стр из футера 
import Pages from '../../utils/constants';
// info pages 
import { PageNotFound } from './../../Pages/Pages.js';

function FooterPages() {

  let location = useLocation();
  const page = location.pathname;

  return (
    Pages[page] ? Pages[page] : <PageNotFound />
  )

}

export default FooterPages;