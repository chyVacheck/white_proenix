
import './Policies.css';
import PoliciesButton from './__button/PoliciesButton';

function Policies() {

  return (
    <article className='policies'>
      <h2 className='policies__title'>
        policies
      </h2>

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
