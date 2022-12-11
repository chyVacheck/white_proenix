
//? стили
import './CurrentTransaction.css';
//* react
import { useState, useEffect } from 'react';
//? компоненты
import { ButtonCopied } from '../../../../components/Components';
//? константы
import { images, CryptoContent } from '../../../../utils/constants';

function CurrentTransaction(props) {

  const className = props.class + ' currentTransactions';
  const popupValid = props.popupValid;
  const [currentNumberOfHistory, setСurrentNumberOfHistory] = useState(1);
  const [currentHistory, setСurrentHistory] = useState([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setСurrentHistory([
      {
        nameSend: 'MATIC',
        nameRes: 'USDT',
        valueSend: 1400,
        valueRes: 100,
        id: 17359401,
        date: {
          year: 2022,
          month: 12,
          day: 10,
          hour: 23,
          minute: 35,
          second: 2,
        }
      },
      {
        nameSend: 'BNB',
        nameRes: 'BTC',
        valueSend: 1713,
        valueRes: 0.61,
        date: {
          year: 2022,
          month: 12,
          day: 11,
          hour: 0,
          minute: 13,
          second: 19,
        }
      },
      {
        nameSend: 'NEXO',
        nameRes: 'TRX',
        valueSend: 713,
        valueRes: 451,
        date: {
          year: 2022,
          month: 12,
          day: 10,
          hour: 23,
          minute: 17,
          second: 2,
        }
      },
    ]);

    let realTime = setInterval(function () {
      setTime(new Date());
    }, 1000);

  }, []);

  useEffect(() => {
    setСurrentNumberOfHistory(currentHistory.length);
  }, [currentHistory.length]);

  function approve() {
    popupValid.setImagePopupValid(images.icon.complete);
    popupValid.setAltPopupValid(images.alt.complete);
    popupValid.setMessagePopupValid('approved');
    setTimeout(() => { popupValid.setIsPopupValidOpen(false) }, 750);
    popupValid.setIsPopupValidOpen(true);
  }

  function reject() {
    popupValid.setImagePopupValid(images.icon.error);
    popupValid.setAltPopupValid(images.alt.error);
    popupValid.setMessagePopupValid('rejected');
    setTimeout(() => { popupValid.setIsPopupValidOpen(false) }, 750);
    popupValid.setIsPopupValidOpen(true);
  }

  function deleteItem(item, arr = currentHistory, setArr = setСurrentHistory) {
    setArr(arr.filter(obj => obj !== item));
  }

  return (
    <section className={className}>
      {/* header - info */}
      <div className='currentTransaction__columns-names'>
        <p className='currentTransaction__column-name'>Couples {currentNumberOfHistory}</p>
        <p className='currentTransaction__column-name'>Status</p>
      </div>

      {/* all current transaction */}
      {currentHistory.map((item, index) => {

        function approveDelete() {
          approve();
          deleteItem(item);
        }

        function rejectDelete() {
          reject();
          deleteItem(item);
        }

        const itemTimeSec = item.date.day * 3600 * 24 + item.date.hour * 3600 + item.date.minute * 60 + item.date.second; // сколько было времени в секундах
        let currentTimeInSec = time.getDate() * 3600 * 24 + time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds(); // сколько сейчас времени в секундах
        let remainedTimeSec = currentTimeInSec - itemTimeSec; // сколько прошло времени в секундах

        let time_hour = Math.floor(remainedTimeSec / 3600);
        remainedTimeSec = remainedTimeSec - 3600 * Math.floor(remainedTimeSec / 3600);
        let time_min = Math.floor(remainedTimeSec / 60);
        remainedTimeSec = remainedTimeSec - 60 * Math.floor(remainedTimeSec / 60);
        let time_sec = remainedTimeSec;

        return (
          <article key={index} className='currentTransaction'>
            {/* name - time */}
            <div className='currentTransaction__text-status'>
              {/* name */}
              <p className='currentTransaction__text'>{item.nameSend} / {item.nameRes}</p>
              <p className='currentTransaction__text'>{CryptoContent[item.nameSend].time[item.nameRes]} m</p>
              {/* time */}
              <div className='currentTransaction__text'>
                {time_hour !== 0 ? (time_hour < 10 ? '0' + time_hour : time_hour) + ' h : ' : (undefined)}
                {time_min !== 0 ? (time_min < 10 ? '0' + time_min : time_min) + ' m : ' : (undefined)}
                {time_sec < 10 ? '0' + time_sec : time_sec} s
              </div>
            </div>

            {/* value - id */}
            <div className='currentTransaction__value-id'>
              <div className='currentTransaction__value'>
                <p className='currentTransaction__text transaction__text_fat'>{item.valueSend} {item.nameSend}</p>
                <p className='currentTransaction__text'>to</p>
                <p className='currentTransaction__text transaction__text_fat'>{item.valueRes} {item.nameRes}</p>
              </div>
              <div className='currentTransaction__id'>
                <p className='currentTransaction__text'>id:</p>
                <ButtonCopied className='currentTransaction__text'>42345678</ButtonCopied>
              </div>
            </div>

            {/* status */}
            <div className='currentTransaction__status'>
              <img
                onClick={approveDelete}
                className='currentTransaction__status-button button'
                src={images.icon['complete']}
                alt={images.alt['complete']}
              />
              <img
                onClick={rejectDelete}
                className='currentTransaction__status-button button'
                src={images.icon['error']}
                alt={images.alt['error']}
              />
            </div>
          </article>
        )
      })
      }
    </section >
  )
}

export default CurrentTransaction;