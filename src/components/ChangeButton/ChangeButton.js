
import './ChangeButton.css';

function ChangeButton({ crypto, func = () => { console.log('onClick was click in ChangeButton') } }) {

  return (
    <div className='changeButton'>
      <button
        className={'changeButton__button button button_place_change'}
        type='button'
        onClick={func}
      >
        <img
          className='changeButton__image'
          alt={crypto.alt}
          src={crypto.img_g}
        />
        <span className='changeButton__name'>{crypto.alt}</span>
      </button>
    </div>
  )
}

export default ChangeButton;