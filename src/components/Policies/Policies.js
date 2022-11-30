
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
          text={'terms of Service'}
        />
        <PoliciesButton
          text={'privacy Policy'}
        />
        <PoliciesButton
          text={'coockie Policy'}
        />
        <PoliciesButton
          text={'AML Policy'}
        />
      </nav>
    </article>
  )
}

export default Policies;
