
//? стили
import Pages from './Pages.js';
//? фото
import  { imageError } from '../../utils/constants.js';

function PageNotFound() {

  const img = {
    src: imageError,
    alt: 'error',
  }

  return (
    <Pages
      img={img}
      title={'Error 404'}
      message={'Page not found'}
    />
  )

}

export default PageNotFound;