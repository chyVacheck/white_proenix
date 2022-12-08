
import './Login.css';
import BigTitle from './../BigTitle/BigTitle.js';
import BigButton from '../BigButton/BigButton';
import Field from '../Field/Field';

//? hook
import useForm from './../../hooks/useForm.js';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

//? for input
import { handleInput } from '../../utils/FormValidation';

function Login({ popupValid }) {

  const [showPass, setShowPass] = useState(false);

  const { values, handleChange, setValues } = useForm({
    email: '',
    password: ''
  });

  const classNameShowPass = showPass ? 'login__button-password button login__button-password_open' : 'login__button-password button login__button-password_close'

  function changeVisibilitiPassword() {
    setShowPass(!showPass);
  }

  function handleChangeInput(event) {
    handleInput(event, popupValid);
    handleChange(event);
  }

  return (
    <article className='login'>
      <BigTitle id='sign-in'>
        sign in
      </BigTitle>

      <form className='login__form'>
        <Field
          inputName={'email'}
          fieldName='Email Address'
          value={values.email}
          handleChange={handleChangeInput}
          minLength={null}
          maxLength={null}
          type='email'
        />
        <Field
          inputName={'password'}
          fieldName='Password'
          value={values.password}
          handleChange={handleChangeInput}
          minLength={8}
          maxLength={16}
          type='password'
          showPass={showPass}
        >
          <button
            id='sign-in-submit-button'
            className={classNameShowPass}
            type='button'
            onClick={changeVisibilitiPassword} />
        </Field>

        <NavLink className={'login__nav link'} to={'/'}>
          Forgot password? {/* //todo сделать переход на стр */}
        </NavLink>

        <BigButton type='submit'>
          sign in
        </BigButton>
      </form>

      <div className='login__create-account-link'>
        <p className='login__create-account-message'>
          New on WhitePhoenix?
        </p>
        <NavLink className='login__nav link' to={'/Register'}>
          Create an account
        </NavLink>
      </div>
    </article>
  )
}

export default Login;