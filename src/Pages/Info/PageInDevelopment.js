
import Pages from './Pages.js';
import { imageWaiting } from './../../utils/constants.js';

function PageInDevelopment() {

  const img = {
    src: imageWaiting,
    alt: 'waiting',
  }

  return (
    <Pages
      img={img}
      title={'We apologize to you'}
      message={'Page in development'}
    />
  )

}

export default PageInDevelopment;