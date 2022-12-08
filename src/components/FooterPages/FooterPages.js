
import './FooterPages.css';

//? вспомогательны
import { useLocation } from 'react-router-dom';
import Pages from '../../utils/constants';

import PageNotFound from './../../Pages/Info/PageNotFound.js';

function FooterPages() {

  let location = useLocation();
  const page = location.pathname;

  return (
    Pages[page] ? Pages[page] : <PageNotFound />
  )

}

export default FooterPages;