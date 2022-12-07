
import './Profile.css';

import error from './../../images/icons/error.svg';
import waiting from './../../images/icons/waiting.svg';
import complete from './../../images/icons/complete.svg';

import star from './../../images/reviews/Star.svg';
import user_img from './../../images/User_black.svg';
import { useEffect, useState } from 'react';

const image = {
  'complete': complete,
  'waiting': waiting,
  'error': error,
}

function Profile({
  currentUser = {
    fullName: { text: 'Viktor Barinov' },
    country: { text: 'Russian Federation', src: error, alt: 'error' },
    adress: { text: 'Moscow, Pushkina st. 15', src: waiting, alt: 'waiting' },
    mail: { text: 'email@mail.ru', src: complete, alt: 'complete' },
    level: 4,
    limit: {
      current: 7.523,
      all: 10,
    }
  },
  lastTransactions = [
    { sendValue: 1400, resValue: 1, sendType: 'Matic', resType: 'BTC', img: 'complete', time: '11 : 11 November 11' },
    { sendValue: 1245, resValue: 3.5, sendType: 'BNB', resType: 'Matic', img: 'error', time: '07 : 46 November 21' },
  ]

}) {

  let stars = [];
  for (let i = 0; i < currentUser.level; i++) {
    stars.push(<img className='profile__container__general-img' key={i} src={star} alt={'star'} />);
  }

  const [lineLimit, setLineLimit] = useState('00')

  window.setLineLimit = ((value) => (setLineLimit(value)))

  useEffect(() => {
    let persentLineLimit = (100 / (currentUser.limit.all / currentUser.limit.current));
    if (persentLineLimit === 100) {
      setLineLimit('100');
      return
    }
    if (persentLineLimit >= 80) {
      setLineLimit('80');
      return
    }
    if (persentLineLimit >= 70) {
      setLineLimit('70');
      return
    }
    if (persentLineLimit >= 60) {
      setLineLimit('60');
      return
    }
    if (persentLineLimit >= 50) {
      setLineLimit('50');
      return
    }
    if (persentLineLimit >= 40) {
      setLineLimit('40');
      return
    }
    if (persentLineLimit >= 30) {
      setLineLimit('30');
      return
    }
    if (persentLineLimit >= 20) {
      setLineLimit('20');
      return
    }
    if (persentLineLimit >= 10) {
      setLineLimit('10');
      return
    }
    if (persentLineLimit >= 0) {
      setLineLimit('00');
      return
    }

  }, [currentUser.limit.current])

  return (
    <section className='profile'>
      {/*//? User */}
      <div className='profile__user'>
        {/* User image */}
        <div className='profile__container profile__container_user'>
          <img
            className='profile__user-img'
            src={user_img}
            alt='user'
          />
        </div>
        {/* User name + daily-limit */}
        <div className='profile__user-name-limit'>
          <p className='profile__user-name'>{currentUser.fullName.text}</p>
          <div className='profile__user-limit'>
            <div className='profile__user-limit-line'>
              <div id={`profile__user-limit-line-current-${lineLimit}`} className='profile__user-limit-line-current' />
            </div>
            <p className='profile__user-limit-text'>Daily limit {currentUser.limit.current}/{currentUser.limit.all}BTC</p>
          </div>
        </div>

      </div>

      {/*//? Info */}
      <div className='profile__info'>
        {/*//* General information */}
        <div className='profile__info-block'>
          <h2 className='profile__title'>General information</h2>
          <div className='profile__container'>
            {/* Country */}
            <div className='profile__container__general-info-block'>
              <p className='profile__container__general-info'>Country</p>
              <p className='profile__container__general-info' >{currentUser.country.text} <img className='profile__container__general-img' src={currentUser.country.src} alt={currentUser.country.alt} /></p>
            </div>
            {/* Adress*/}
            <div className='profile__container__general-info-block'>
              <p className='profile__container__general-info'>Adress</p>
              <p className='profile__container__general-info' >{currentUser.adress.text} <img className='profile__container__general-img' src={currentUser.adress.src} alt={currentUser.adress.alt} /></p>
            </div>
            {/* Mail */}
            <div className='profile__container__general-info-block'>
              <p className='profile__container__general-info'>Mail</p>
              <p className='profile__container__general-info' >{currentUser.mail.text} <img className='profile__container__general-img' src={currentUser.mail.src} alt={currentUser.mail.alt} /></p>
            </div>
          </div>
        </div>

        {/*//* Verification status */}
        <div className='profile__info-block'>
          <h2 className='profile__title'> Verification status</h2>
          <div className='profile__container'>
            {/* Level */}
            <div className='profile__container__general-info-block'>
              <p className='profile__container__general-info'>LVL {currentUser.level}</p>
              <div>
                {stars}
              </div>
            </div>

            {/* Privileges */}
            <div className='profile__container-privileges'>
              <p className='profile__container-privileges-name'>privileges:</p>
              <p className='profile__container-privileges-name profile__container-privileges_dailyLimit'>Daily limit: {currentUser.limit.all}BTC</p>
            </div>

            {/* Verification complete */}
            <div className='profile__container-verification'>
              Verification complete <img className='profile__container__verification-img' src={complete} alt={''} />
            </div>
          </div>
        </div>
      </div>

      {/*//? Transactions History */}
      <div className='profile__history'>
        <h2 className='profile__title'>Last transactions</h2>
        <div className='profile__container profile__container_history'>
          {
            lastTransactions.map((item, index) => {
              return (
                <div key={index} className='profile__transactions'>
                  {/* Change - values */}
                  <div className='profile__values'>
                    <p className='profile__values-text'>
                      Change
                    </p>
                    <p className='profile__values-text'>
                      {item.sendValue} {item.sendType} to {item.resValue} {item.resType}
                    </p>
                  </div>
                  {/* time - status */}
                  <div className='profile__values'>
                    {/* time */}
                    <p className='profile__values-text'>
                      {item.time}
                    </p>
                    {/* status */}
                    <div className='profile__values-status'>
                      <p className='profile__values-text'>
                        {item.img}
                      </p>
                      <img className='profile__values-img' alt={item.img} src={image[item.img]}></img>
                    </div>

                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default Profile;