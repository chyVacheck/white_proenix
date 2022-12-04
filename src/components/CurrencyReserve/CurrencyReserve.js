
//? стили
import './CurrencyReserve.css';

import { CryptoContent } from '../../utils/constants';

function CurrencyReserve({
  CurrencyReserve = {
    BTC: 17.2739,
    MATIC: 16.3721,
    NEXO: 3.3463,
    USDT: 53.3550,
    ETH: 65.3345,
    BNB: 32.3562,
  },
  setResultingCrypto,

}) {

  const onClick = {
    BTC: (() => { setResultingCrypto(CryptoContent.BTC) }),
    MATIC: (() => { setResultingCrypto(CryptoContent.MATIC) }),
    NEXO: (() => { setResultingCrypto(CryptoContent.NEXO) }),
    USDT: (() => { setResultingCrypto(CryptoContent.USDT) }),
    ETH: (() => { setResultingCrypto(CryptoContent.ETH) }),
    BNB: (() => { setResultingCrypto(CryptoContent.BNB) }),
  }

  return (
    <div className='currencyReserve'>
      <div className='currencyReserve-blur'></div>

      {/* BTC */}
      <div className='currencyReserve__crypto'>
        {/* 1 */}
        <div className='currencyReserve__image-name'>
          <img
            onClick={onClick.BTC}
            className='currencyReserve__image'
            src={CryptoContent.BTC.img_g}
            alt={CryptoContent.BTC.alt}
          />
          <p className='currencyReserve__name'>
            {CryptoContent.BTC.fullName}
          </p>
        </div>
        {/* 2 */}
        <p className='currencyReserve__image-number'>
          {CurrencyReserve.BTC}
        </p>

        {/* 3 */}
        <p className='currencyReserve__image-text'>
          Currency reserve
        </p>

      </div>

      {/* MATIC */}
      <div className='currencyReserve__crypto'>
        {/* 1 */}
        <div className='currencyReserve__image-name'>
          <img
            onClick={onClick.MATIC}
            className='currencyReserve__image'
            src={CryptoContent.MATIC.img_g}
            alt={CryptoContent.MATIC.alt}
          />
          <p className='currencyReserve__name'>
            {CryptoContent.MATIC.fullName}
          </p>
        </div>
        {/* 2 */}
        <p className='currencyReserve__image-number'>
          {CurrencyReserve.MATIC}
        </p>

        {/* 3 */}
        <p className='currencyReserve__image-text'>
          Currency reserve
        </p>

      </div>

      {/* NEXO */}
      <div className='currencyReserve__crypto'>
        {/* 1 */}
        <div className='currencyReserve__image-name'>
          <img
            onClick={onClick.NEXO}
            className='currencyReserve__image'
            src={CryptoContent.NEXO.img_g}
            alt={CryptoContent.NEXO.alt}
          />
          <p className='currencyReserve__name'>
            {CryptoContent.NEXO.fullName}
          </p>
        </div>
        {/* 2 */}
        <p className='currencyReserve__image-number'>
          {CurrencyReserve.NEXO}
        </p>

        {/* 3 */}
        <p className='currencyReserve__image-text'>
          Currency reserve
        </p>

      </div>

      {/* USDT */}
      <div className='currencyReserve__crypto'>
        {/* 1 */}
        <div className='currencyReserve__image-name'>
          <img
            onClick={onClick.USDT}
            className='currencyReserve__image'
            src={CryptoContent.USDT.img_g}
            alt={CryptoContent.USDT.alt}
          />
          <p className='currencyReserve__name'>
            {CryptoContent.USDT.fullName}
          </p>
        </div>
        {/* 2 */}
        <p className='currencyReserve__image-number'>
          {CurrencyReserve.USDT}
        </p>

        {/* 3 */}
        <p className='currencyReserve__image-text'>
          Currency reserve
        </p>

      </div>

      {/* ETH */}
      <div className='currencyReserve__crypto'>
        {/* 1 */}
        <div className='currencyReserve__image-name'>
          <img
            onClick={onClick.ETH}
            className='currencyReserve__image'
            src={CryptoContent.ETH.img_g}
            alt={CryptoContent.ETH.alt}
          />
          <p className='currencyReserve__name'>
            {CryptoContent.ETH.fullName}
          </p>
        </div>
        {/* 2 */}
        <p className='currencyReserve__image-number'>
          {CurrencyReserve.ETH}
        </p>

        {/* 3 */}
        <p className='currencyReserve__image-text'>
          Currency reserve
        </p>

      </div>

      {/* BNB */}
      <div className='currencyReserve__crypto'>
        {/* 1 */}
        <div className='currencyReserve__image-name'>
          <img
            onClick={onClick.BNB}
            className='currencyReserve__image'
            src={CryptoContent.BNB.img_g}
            alt={CryptoContent.BNB.alt}
          />
          <p className='currencyReserve__name'>
            {CryptoContent.BNB.fullName}
          </p>
        </div>
        {/* 2 */}
        <p className='currencyReserve__image-number'>
          {CurrencyReserve.BNB}
        </p>

        {/* 3 */}
        <p className='currencyReserve__image-text'>
          Currency reserve
        </p>

      </div>
    </div>
  )
}

export default CurrencyReserve;