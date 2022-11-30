
import './Paragrafs.css';

function Paragrafs({ paragrafs = [] }) {

  return (
    <div className='paragrafs__paragrafs'>
      {paragrafs.map((item, index) => {
        return <p className='paragrafs__paragraf' key={index}>{item}</p>
      })}
    </div>
  )
}

export default Paragrafs;