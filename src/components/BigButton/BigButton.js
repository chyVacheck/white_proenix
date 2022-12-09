
//? стили
import './BigButton.css';

function BigButton({ func = (() => { console.log('I am big button') }), type, sizeBig, children }) {

  function onClick(event) {
    func(event);
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