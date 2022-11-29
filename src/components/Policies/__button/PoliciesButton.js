
import { useNavigate } from 'react-router-dom';
import './PoliciesButton.css';

function PoliciesButton({ text }) {

  const navigate = useNavigate();

  const link = `/${text.split(" ").join("_")}`

  function onClick() {
    navigate(link);
  }

  return (
    <button onClick={onClick} className='policies-button button'>
      <p className='policies-button-name'>
        {text}
      </p>
    </button>
  )
}

export default PoliciesButton;