
//? стили
import './CurrencyReserve.css';

import { CryptoContent } from './../../../../utils/constants.js';

function CurrencyReserve({
  CurrencyReserve = {
    BTC: 17.9739,
    MATIC: 134014.2721,
    NEXO: 239702.1463,
    USDT: 159253.3550,
    ETH: 109001.1705,
    BNB: 168017.7542,
  },
  setResultingCrypto,

}) {

  const scroll = 650;

  const onClick = {
    BTC: (() => { setResultingCrypto(CryptoContent.BTC); window.scroll(0, scroll) }),
    MATIC: (() => { setResultingCrypto(CryptoContent.MATIC); window.scroll(0, scroll) }),
    NEXO: (() => { setResultingCrypto(CryptoContent.NEXO); window.scroll(0, scroll) }),
    USDT: (() => { setResultingCrypto(CryptoContent.USDT); window.scroll(0, scroll) }),
    ETH: (() => { setResultingCrypto(CryptoContent.ETH); window.scroll(0, scroll) }),
    BNB: (() => { setResultingCrypto(CryptoContent.BNB); window.scroll(0, scroll) }),
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