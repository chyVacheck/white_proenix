
import './Home.css';
import BigTitle from './../BigTitle/BigTitle.js';
import BigButton from './../BigButton/BigButton.js';
import CryptoPrice from './../CryptoPrice/CryptoPrice.js';
import Field from './../Field/Field.js';
import ChangeButton from '../ChangeButton/ChangeButton';
import InfoCards from '../InfoCards/InfoCards.js'
import Reviews from './../Reviews/Reviews.js';

//? images for cards info
import imgBuy from './../../images/cardsInfo/Buy.svg';
import imgSupport from './../../images/cardsInfo/Support.svg';
import imgFast from './../../images/cardsInfo/Fast.svg';
import imgSecurity from './../../images/cardsInfo/Safe.svg';

function Home({
  sendValue = 1,
  sendValueInputName = '',
  handleChangeSendValue,
  openCryptoPopupSend,
  openCryptoPopupRes,
  resulValue,

  sendCrypto,
  resultingCrypto,

}) {
 
  return (
    <section className='home'>
      <BigTitle id={'storage-buying-and-selling-cryptocurrency'}>
        Storage, Buying and Selling Cryptocurrency
      </BigTitle>

      <article className='home__container'>

        <h2 className='home__subtitle'>
          WhitePhoenix — The simplest method to exchange crypto at the best rates, in the most secure environment
        </h2>

        <h2 className='home__list'>
          Best rates <span className='home__list_separator'>|</span> Multiple networks <span className='home__list_separator'>|</span> Volatility Protection mod
        </h2>

        <BigButton
          sizeBig={true}
          type={'button'}
        >
          Buy cryptocurrency
        </BigButton>

        <CryptoPrice/>

        <article className='home__exchange'>
          <BigTitle id={'cryptocurrency-exchange'}>
            Cryptocurrency exchange
          </BigTitle>

          <form className='home__form'>
            <Field
              className={'field__input_big'}
              isPlaceholder={false}
              value={sendValue}
              inputName={sendValueInputName}
              fieldName='You Send'
              handleChange={handleChangeSendValue}
              minLength={null}
              maxLength={null}
              type='number'
            >
              <ChangeButton
                crypto={sendCrypto}
                func={openCryptoPopupSend}
              />

            </Field>
            <Field
              className={'field__input_big'}
              isPlaceholder={false}
              inputName={null}
              fieldName='You Receive'
              value={resulValue}
              handleChange={null}
              minLength={null}
              maxLength={null}
              type='number'
              readOnly={true}
            >
              <ChangeButton
                crypto={resultingCrypto}
                func={openCryptoPopupRes}
              />
            </Field>

            <p className='currentRate'>
              Current Rate: <span className='currentRate__rate'>{sendValue} {sendCrypto.alt} = {resulValue} {resultingCrypto.alt} </span>
            </p>

            <BigButton type='submit'>
              Exchange
            </BigButton>
          </form>

        </article>


        <InfoCards
          cards={[
            {
              alt: 'Buy',
              img: imgBuy,
              title: 'Low Fees',
              message: 'Not only we offer a 0.2% fee, but we also reward you with a volume oriented fee structure, to take it as low as 0.1%'
            },
            {
              alt: 'Support',
              img: imgSupport,
              title: 'Support',
              message: 'Our 24/7 support team, composed by crypto experts is committed to resolve any issues than an hour.'
            },
            {
              alt: 'Fast',
              img: imgFast,
              title: 'Fast',
              message: 'Orders are usually completed within a time range of 2’ to 10’, with an averege time of 5’ per transaction.'
            },
            {
              alt: 'Security',
              img: imgSecurity,
              title: 'Security',
              message: 'We use multi-layer protection systems along with cutting edge technologies, to ensure your privacy and security.'
            },
          ]}
        >
        </InfoCards>

        <BigTitle id={'clients-about-us'}>
          Clients about us
        </BigTitle>

        <Reviews
          reviews={[
            {
              name: 'Aaron Brincat',
              title: 'It definitely qualifies the best exchange',
              message: 'They offer the most competitive servise out there, i can’t even go through naming all their advantages. Really impressed!',
              date: 'May 20, 2022',
            },
            {
              name: 'Vitalijus Preidis',
              title: 'I trust them',
              message: 'I have exchanged small to large amounts on White Phoenix and every transactions was just how it should be. No problems at all.',
              date: 'April 3, 2022',
            },
            {
              name: 'test1',
              title: 'test1',
              message: 'test1',
              date: 'May 1, 2022',
            },
            {
              name: 'test2',
              title: 'test2',
              message: 'test2',
              date: 'May 2, 2022',
            },
            {
              name: 'test3',
              title: 'test3',
              message: 'test3',
              date: 'May 3, 2022',
            },
          ]}
        />

      </article>
    </section>
  )
}

export default Home;