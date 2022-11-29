
import './BigButton.css';

function BigButton({ type, sizeBig, children }) {

  return (
    <button
      className={`bigButton button ${sizeBig ? '' : 'bigButton_medium'}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default BigButton;