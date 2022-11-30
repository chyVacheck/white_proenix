
import './Table.css';

function Table({ Coockie = [] }) {

  return (
    <article className='table'>
      <div className='table__colon-names'>
        <h3 className='table__colon-name'>Coockie name</h3>
        <h3 className='table__colon-name'>Type</h3>
        <h3 className='table__colon-name'>Party</h3>
        <h3 className='table__colon-name'>Target</h3>
        <h3 className='table__colon-name'>Retention period</h3>
      </div>

      <table className='table__content'>
        {
          Coockie.map((item, index) => {
            return (
              <tr key={index} className='table__row'>
                <td className='table__name table__cell'>
                  {item.name}
                </td>
                <td className='table__type table__cell'>
                  {item.type}
                </td>
                <td className='table__party table__cell'>
                  {item.party}
                </td>
                <td className='table__target table__cell'>
                  {item.target}
                </td>
                <td className='table__period table__cell'>
                  {item.period}
                </td>
              </tr>
            )
          })}

      </table>
    </article>
  )

}

export default Table;
