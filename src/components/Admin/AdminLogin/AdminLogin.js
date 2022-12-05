
import { useEffect, useState } from 'react';
import axios from 'axios';
import useForm from '../../../hooks/useForm';
import Field from '../../Field/Field';
import './AdminLogin.css';

function AdminLogin() {

  const { values, handleChange, setValues } = useForm({
    password: ''
  });

  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])


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
          If the password is entered incorrectly, the login will be blocked for one hour
        </p>
      </article>
    </section>
  )
}

export default AdminLogin;