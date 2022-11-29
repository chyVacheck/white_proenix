
import './BigTitle.css';

function BigTitle({ children }) {

  return (
    <h2 className='bigTitle'>
      {children}
    </h2>
  )
}

export default BigTitle;