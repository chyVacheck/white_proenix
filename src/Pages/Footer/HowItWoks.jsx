
import BigTitle from '../../components/BigTitle/BigTitle.js';

import Title from '../../components/FooterPages/Title/Title.js';
import Paragrafs from '../../components/FooterPages/Paragrafs/Paragrafs.js';
import List from '../../components/FooterPages/List/List.js';

function HowItWorks() {

  const name = 'How it works';

  window.scrollTo(0, 0);

  return (
    <section className='footerPages'>
      <BigTitle id='how-it-works'>
        {name}
      </BigTitle>

      <article className='footerPages__container'>
        <List
          list={[
            'First, select the coins and amounts you wish to exchange and hit the “Exchange” button. Next, enter the address you want to receive the funds',
            'Make sure you will deposit the amount you selected on the previous step, within 6 hours, to the address we will provide you with',
            'After your deposit is confirmed, we will process the order at the best rates on the market and within a few minutes, you will receive your funds!'
          ]}
        />

        <Title id={`${name} 1`}>
          Now that you learned everything you need to know, go ahead and apply it! | Exchange
        </Title>

        <Title subTitle={true} id={`${name} 1.1`}>
          Step by step tutorial:
        </Title>

        <Paragrafs
          paragrafs={[
            'The exchange process on our platform is one of the simplest out there! Even if this is your first time in a crypto exchange service, you may easily perform your first exchange by following the steps below'
          ]}
        />

        <List
          textBefore={
            <Paragrafs
              paragrafs={[
                'In the exchange form, select from the coin list the coins you wish to exchange Send-Receive'
              ]}
            />}
          list={[
            'Enter the amount you wish to exchange and hit the Exchange Button, double-check your entries and your exchange information. If everything looks as it was supposed to you may proceed as follows.',
            'Enable VPM if you wish to protect yourself from negative volatility during transactions, specify a percentage and if the rates drop below it you will be refunded.',
            'Enter the recipient address, in which you will receive your exchanged funds and the refund address for the coin you deposited (if you enabled VPM).',
            'Once you have done the above, you may hit the exchange button to proceed.',
            'Congratulations, you have successfully placed your order!',
            'In the “Awaiting Deposit” step we will provide you with a deposit wallet address. Send the amount you indicated in the previous step to the displayed address within 6 hours.',
            'Nothing else is required from your part, we handle everything from now on. Once your deposit is confirmed, we will process the order at the best rates on the market! In a few minutes, you will receive your exchanged funds in your wallet.',
          ]}
        />

      </article>
    </section >
  )

}

export default HowItWorks;