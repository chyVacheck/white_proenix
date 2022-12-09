
//? стили
import './MailVerification.css';
//* react
import { useState } from 'react';
//? компоненты
import { BigTitle, BigButton } from './../../../components/Components.js';

//? hook
import useForm from '../../../hooks/useForm.js';

function MailVerification({ mail = 'johny@gmail.com' }) {

  const { values: input, handleChange, setValues } = useForm({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
  });

  const [time, setTime] = useState();

  let realTime = setInterval(function () {
    let date = new Date();
    setTime(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
  }, 1000);


  return (
    <article className='mailVerification'>
      <BigTitle id='mail-verification'>
        mail verification
      </BigTitle>

      {/* text-mail */}
      <div className='mailVerification__mail-text'>
        <p className='mailVerification__text'>
          Code have been sent to your email
        </p>
        <p className='mailVerification__mail'>
          {mail}
        </p>
      </div>

      {/* input for 6-code */}
      <form className='mailVerification__form'>
        <div className='mailVerification__inputs'>
          <input placeholder='Q' required={true} name='first' maxLength={1} type='text' value={input.first} onChange={handleChange} className='mailVerification__input'></input>
          <input placeholder='W' required={true} name='second' maxLength={1} type='text' value={input.second} onChange={handleChange} className='mailVerification__input'></input>
          <input placeholder='4' required={true} name='third' maxLength={1} type='text' value={input.third} onChange={handleChange} className='mailVerification__input'></input>
          <input placeholder='P' required={true} name='fourth' maxLength={1} type='text' value={input.fourth} onChange={handleChange} className='mailVerification__input'></input>
          <input placeholder='6' required={true} name='fifth' maxLength={1} type='text' value={input.fifth} onChange={handleChange} className='mailVerification__input'></input>
          <input placeholder='N' required={true} name='sixth' maxLength={1} type='text' value={input.sixth} onChange={handleChange} className='mailVerification__input'></input>
        </div>

        <div>
          <p className='mailVerification__time'>{time}</p>
          <p className='mailVerification__resend'>Resend Code</p>
        </div>

        <BigButton>
          Verify
        </BigButton>
      </form>

    </article>
  )
}

export default MailVerification;