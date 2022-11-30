
import './List.css';

function List({ textBefore, list = [], textAfter }) {


  return (
    <div className='list-block'>
      {textBefore}
      <ul className='list'>
        {list.map((item, index) => {
          return (
            <li className='list__text' key={index}>{item}</li>
          )
        })}
      </ul>
      {textAfter}
    </div>
  )
}

export default List;