
import './BigButton.css';

function BigButton({ func = ((str = '') => { console.log(str) }), type, sizeBig, children }) {

  function onClick() {
    func(children);
  }

  return (
    <button
      onClick={onClick}
      className={`bigButton button ${sizeBig ? '' : 'bigButton_medium'}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default BigButton;