
import './Policies.css';
import PoliciesButton from './__button/PoliciesButton';
import BigTitle from './../BigTitle/BigTitle.js';

function Policies() {

  return (
    <article className='policies'>
      <BigTitle id='policies'>
        policies
      </BigTitle>

      <nav className='policies__buttons'>
        <PoliciesButton
          text={'Terms of Service'}
        />
        <PoliciesButton
          text={'Privacy Policy'}
        />
        <PoliciesButton
          text={'Coockie Policy'}
        />
        <PoliciesButton
          text={'AML Policy'}
        />
      </nav>
    </article>
  )
}

export default Policies;
