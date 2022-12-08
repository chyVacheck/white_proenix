
import './InfoCards.css';
import { useNavigate } from 'react-router-dom';

function InfoCards({ cards = [] }) {

  const navigate = useNavigate();

  return (
    <article className='infoCards'>
      {cards.map((item, index) => {

        function onClick() {
          navigate(item.link);
        }

        return (
          <div key={index} className='infoCard__card'>
            {/* image */}
            <div onClick={item.link ? onClick : undefined} className={item.link ? 'infoCard__image infoCard_link' : 'infoCard__image'}>
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