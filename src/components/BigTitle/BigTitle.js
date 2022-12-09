
//? стили
import './BigTitle.css';

function BigTitle({ children, id }) {

  return (
    <h1 id={id} className='bigTitle'>
      {children}
    </h1>
  )
}

export default BigTitle;