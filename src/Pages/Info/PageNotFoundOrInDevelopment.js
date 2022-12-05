
import Pages from './Pages.js';
import src from './../../images/cardsInfo/Fast.svg';

function PageNotFoundOrInDevelopment() {

  const img = {
    src: src,
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