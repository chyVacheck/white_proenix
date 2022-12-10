
//? стили
import './CurrentCryptocurrencyRate.css';
//? компоненты
import { CryptoContent } from './../../../../utils/constants.js';

function CurrentCryptocurrencyRate(props) {

  const className = props.class + ' currentCryptocurrencyRate';

  const CurrentRate = [
    { name: 'BTC', value: 16000.0, marga: 3 },
    { name: 'BNB', value: 16099.5, marga: 2.3 },
    { name: 'ETH', value: 16099.5, marga: 2.3 },
    { name: 'MATIC', value: 0.9472, marga: -4 },
    { name: 'NEXO', value: 16099.5, marga: 3 },
    { name: 'TRX', value: 16099.5, marga: 2.3 },
    { name: 'USDT', value: 16099.5, marga: -3 },
  ];

  return (
    <section className={className}>
      {/* names of column */}
      <div className='adminPanel__info currentCryptocurrencyRate__info'>
        <h3 className='adminPanel__title'>Crypto cyrrency</h3>
        <h3 className='adminPanel__title'>Binance price</h3>
        <h3 className='adminPanel__title'>Phoenix price</h3>
        <h3 className='adminPanel__title'>%</h3>
      </div>

      {/* current crypto currency rate  */}
      <div className='currentCryptocurrencyRate__list'>
        {
          CurrentRate.map((item, index) => {

            const name = item.name;

            return (
              <div key={index} className='currentCryptocurrencyRate__item'>
                <div className='currentCryptocurrencyRate__img-name'>
                  <img className='currentCryptocurrencyRate__item-img' src={CryptoContent[name].img} alt={CryptoContent[name].alt} />
                  <h4 className='currentCryptocurrencyRate__item-name'>{item.name}</h4>
                </div>
                <p className='currentCryptocurrencyRate__item-number'>{item.value}</p>
                <p className='currentCryptocurrencyRate__item-number'>{item.value * item.marga / 100 + item.value}</p>
                <p className='currentCryptocurrencyRate__item-number currentCryptocurrencyRate__item-number_marga'>
                  {item.marga}
                </p>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default CurrentCryptocurrencyRate;