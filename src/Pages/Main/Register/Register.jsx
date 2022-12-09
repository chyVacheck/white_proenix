
//? стили
import './Register.css';
//* react
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//? компоненты
import { BigTitle, BigButton, Field } from './../../../components/Components.js';

//? hook
import useForm from '../../../hooks/useForm.js';
//? валидация
import { handleInput } from '../../../utils/FormValidation.js';

function Register({ popupValid }) {

  const [showPass, setShowPass] = useState(false);

  const { values, handleChange, setValues } = useForm({
    email: '',
    password: '',
    policies: false,
  });

  const classNameShowPass = showPass ? 'register__button-password button register__button-password_open' : 'register__button-password button register__button-password_close'

  function changeVisibilitiPassword() {
    setShowPass(!showPass);
  }

  function handleChangeInput(event) {
    handleInput(event, popupValid);
    handleChange(event);
  }

  return (
    <article className='register'>
      <BigTitle id='sign-up'>
        sign up
      </BigTitle>
      <form className='register__form'>
        <div className='register__fields'>
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
              className={classNameShowPass}
              type='button'
              onClick={changeVisibilitiPassword} />
          </Field>
        </div>

        <div className='register__password-message'>
          At least 8 characters with uppercase letters and numbers
        </div>

        <div className='register__checkbox-container'>
          <input required={true} className='register__input-checkbox' type='checkbox'></input>
          <p className='register__input-checkbox-message'>
            Accept our <NavLink className={'register__nav link'} to={'/Policies'} children={' Policies'} />
          </p>
        </div>

        <BigButton type='submit'>
          sign up
        </BigButton>
      </form>

      <div className='register__create-account-link'>
        <p className='register__create-account-message'>
          Already have an account?
        </p>
        <NavLink className='register__nav link' to={'/Login'}>
          Log in
        </NavLink>
      </div>
    </article>
  )
}

export default Register;