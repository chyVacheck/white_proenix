
import './Pages.css'

function Pages({ img, message, title }) {

  return (
    <section className='pages'>
      <h1 className='pages__title'>
        {title}
      </h1>

      <img
        className='pages__image'
        src={img.src}
        alt={img.alt}
      />

      <p className='pages__text'>
        {message}
      </p>

    </section >
  )

}

export default Pages;