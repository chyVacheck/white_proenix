
import './PageNotFoundOrInDevelopment.css'
import img from './../../../images/cardsInfo/Fast.svg';

function PageNotFoundOrInDevelopment() {


  return (
    <section className='pageNotFoundOrInDevelopment'>
      <h1 className='pageNotFoundOrInDevelopment__text'>
        We apologize to you
      </h1>

      <img
        className='pageNotFoundOrInDevelopment__image'
        src={img}
        alt={'Whait'}
      />

      <p className='pageNotFoundOrInDevelopment__text'>
        Page not found or under development
      </p>

    </section >
  )

}

export default PageNotFoundOrInDevelopment;