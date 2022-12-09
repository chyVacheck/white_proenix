
//? стили
import './Footer.css';
// личные компоненты
import FooterInfoColumn from './__info-column/Footer__info-column';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <article className='footer__container'>
        {/* //? колонки с информацией */}
        {/* //todo вынести в отдельный компонент*/}
        <div className='footer__info-container'>
          <FooterInfoColumn
            title='About us'
            links={['How it works', 'Fees']}
          />

          <FooterInfoColumn
            title='Features'
            links={['Exchange', 'VPM', 'Live Prices']}
          />

          <FooterInfoColumn
            title='Patrtner with us'
            links={['Integrate our API', 'Become an Affiliate', 'Share your proposal', 'Start your career']}
          />

          <FooterInfoColumn
            title='Policies'
            links={['Terms of Service', 'Privacy Policy', 'Coockie Policy', 'AML Policy']}
          />

          <FooterInfoColumn
            title='Support Center'
            links={['Explore FAQ', 'Contact Us', 'Sent Feedback']}
          />

        </div>
        {/* //? копирайт */}
        <div className='footer__copyright-container'>
          <p className='footer__copyright-title'>© {year} Phoenixw.com. All rights reserved</p>
        </div>
      </article>
    </footer>
  )
}

export default Footer;