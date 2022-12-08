
import './InfoCards.css';

function InfoCards({ cards = [] }) {

  return (
    <article className='infoCards'>
      {cards.map((item, index) => {
        return (
          <div key={index} className='infoCard__card'>
            {/* image */}
            <div className='infoCard__image'>
              <img
                className={item.alt === 'Fast' ? 'infoCard__img_fast' : undefined}
                src={item.img}
                alt={item.alt}
              />
            </div>
            {/* content */}
            <div className='infoCard__content'>
              <h3 className='infoCard__title'>
                {item.title}
              </h3>
              <p className='infoCard__message'>
                {item.message}
              </p>
            </div>
          </div>
        )
      })}
    </article>
  )
}

export default InfoCards;