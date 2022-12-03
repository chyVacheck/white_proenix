
import './InfoCards.css';

function InfoCards({ cards = [] }) {

  return (
    <article className='infoCards'>
      {cards.map((item, index) => {
        return (
          <div key={index} className='infoCard__card'>
            <img
              src={item.img}
              alt={item.alt}
            />
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