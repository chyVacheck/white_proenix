
import { useNavigate } from 'react-router-dom';
import './HeaderButton.css';

function HeaderButton({ page, isLogined }) {

  const navigate = useNavigate();
  const link = page === '/Login' ? '/Register' : '/Login';
  const text = page === '/Login' ? 'sign up' : 'sign in';

  function onClick() {
    navigate(link);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className='HeaderButton button'>
      <p className='HeaderButton__text'>
        {text}
      </p>
    </button>
  )
}

export default HeaderButton;