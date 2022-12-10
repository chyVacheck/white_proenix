
//? стили
import './AllTransactionHistory.css';
//* react
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//? константы
import { images } from '../../../../utils/constants';

function AllTransactionHistory(props) {

  const [currentNumberOfHistory, setСurrentNumberOfHistory] = useState(1);
  const className = props.class + ' allTransactionHistory';


  const history = [
    {
      nameSend: 'MATIC',
      nameRes: 'USDT',
      valueSend: 1400,
      valueRes: 100,
      status: 'error',
    },
    {
      nameSend: 'BNB',
      nameRes: 'BTC',
      valueSend: 1713,
      valueRes: 0.61,
      status: 'complete',
    },
    {
      nameSend: 'NEXO',
      nameRes: 'TRX',
      valueSend: 713,
      valueRes: 451,
      status: 'waiting',
    },
  ]

  return (
    <section className={className}>
      {/* header - info */}
      <div className='adminPanel__info'>
        <h3 className='adminPanel__title'>All Transaction History:</h3>
        <p className='adminPanel__number'>{currentNumberOfHistory}</p>
      </div>

      {history.map((item, index) => {
        return (
          <article key={index}>
            {/*//? all Transactions */}
            <div className='transaction'>
              {/* name - status */}
              <div className='transaction__text-status'>
                <p className='transaction__text'>{item.nameSend} / {item.nameRes}</p>
                <img
                  className='transaction__status'
                  src={images.icon[item.status]}
                  alt={images.alt[item.status]}
                />
              </div>
              {/* value */}
              <div className='transaction__value'>
                <p className='transaction__text transaction__text_fat'>{item.valueSend}</p>
                <p className='transaction__text transaction__text_fat'>{item.nameSend}</p>
                <p className='transaction__text'>to</p>
                <p className='transaction__text transaction__text_fat'>{item.valueRes}</p>
                <p className='transaction__text transaction__text_fat'>{item.nameRes}</p>
              </div>
              {/* link */}
              <NavLink className='transaction__link link'>Move</NavLink>
            </div>
            <div className='allTransactionHistory__transaction'>
            </div>
          </article>
        )
      })
      }

    </section >
  )
}

export default AllTransactionHistory;