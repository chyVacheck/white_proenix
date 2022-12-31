
//? стили
import './UseDesctop.css';

function UseDesctop() {

  return (
    <section className='useDesctop'>
      <article className='useDesctop__container'>
        <h1 className='useDesctop__title'>
          The device is not supported
        </h1>

        <div className='useDesctop__info'>
          <p className='useDesctop__text'>
            Unfortunately, our exchanger does not yet know how to work on phones.
          </p>
          <p className='useDesctop__text'>
            You can use our <a
              target="_blank"
              rel="noreferrer"
              className='useDesctop__text_link link'
              href={'https://web.telegram.org/k/'}>
              telegram bot
            </a>  or desktop version.
          </p>
          <p className='useDesctop__text'>
            We apologize to You.
          </p>
        </div>
      </article>
    </section>
  )
}

export default UseDesctop;