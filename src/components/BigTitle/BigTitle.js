
import './BigTitle.css';

function BigTitle({ children, id }) {

  return (
    <h2 id={id} className='bigTitle'>
      {children}
    </h2>
  )
}

export default BigTitle;