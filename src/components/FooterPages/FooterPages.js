
import './FooterPages.css';

//? вспомогательны
import { useLocation } from 'react-router-dom';
import Pages from '../../utils/constants';

function FooterPages() {

  let location = useLocation();
  const page = location.pathname;

  return (
    Pages[page]
  )

}

export default FooterPages;