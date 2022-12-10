
//? стили
import './AllTransactionHistory.css';
//* react
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setСurrentNumberOfHistory(history.length);
  }, [history]);

  return (
    <section className={className}>
      {/* header - info */}
      <div className='adminPanel__info'>
        <h3 className='adminPanel__title'>All Transaction History:</h3>
        <p className='adminPanel__number'>{currentNumberOfHistory}</p>
      </div>

      {history.map((item, index) => {
        return (
          <article key={index} className='allTransactionHistory__transaction'>
            <p className='allTransactionHistory__transaction-text'>{item.nameSend} / {item.nameRes}</p>
            <p className='allTransactionHistory__transaction-text'>{item.valueSend} / {item.valueRes}</p>
            <img src={images.icon[item.status]} alt={images.alt[item.status]} className='allTransactionHistory__transaction-img' />
          </article>
        )
      })
      }

    </section >
  )
}

export default AllTransactionHistory;