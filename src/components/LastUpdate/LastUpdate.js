
import './LastUpdate.css';

function LastUpdate({ data, children }) {

  return (
    <article className='lastUpdate'>
      <h3 className='lastUpdate__title'>
        {`[Last Updated: ${data}]`}
      </h3>
      <p className='lastUpdate__text'>
        {children}
      </p>
    </article>
  )
}

export default LastUpdate;