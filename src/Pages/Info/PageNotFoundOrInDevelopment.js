
import Pages from './Pages.js';
import  { imageWaiting } from './../../utils/constants.js';

function PageNotFoundOrInDevelopment() {

  const img = {
    src: imageWaiting,
    alt: 'waiting',
  }

  return (
    <Pages
      img={img}
      title={'We apologize to you'}
      message={'Page not found or under development'}
    />
  )

}

export default PageNotFoundOrInDevelopment;