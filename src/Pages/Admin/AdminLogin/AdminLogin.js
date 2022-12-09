
//? стили
import './AdminLogin.css';
//* react
import { useEffect, useState } from 'react';
//? компоненты
import { Field } from './../../../components/Components.js';
//? валидация3
import useForm from './../../../hooks/useForm.js';
//* axios
import axios from 'axios';

function AdminLogin() {

  const { values, handleChange, setValues } = useForm({
    password: ''
  });

  const [ip, setIP] = useState('');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }

  useEffect(() => {
    getData()
  }, [])

  function onClick() {
    console.log('123');
  }

  return (
    <section className='adminLogin'>
      <article className='adminLogin__container'>
        <Field
          inputName={'passwordLogin'}
          fieldName='Password'
          value={values.passwordLogin}
          handleChange={handleChange}
          type={'text'}
        />
        <p className='adminLogin__message'>
          If the password is entered incorrectly, the <span onClick={onClick}>login</span> will be blocked for one hour
        </p>
      </article>
    </section>
  )
}

export default AdminLogin;