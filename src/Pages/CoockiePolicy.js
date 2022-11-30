
import BigTitle from './../components/BigTitle/BigTitle.js';
import LastUpdate from './../components/LastUpdate/LastUpdate.js';

import Paragrafs from './../components/FooterPages/Paragrafs/Paragrafs.js';
import List from './../components/FooterPages/List/List.js';
import Table from '../components/FooterPages/Table/Table.js';

function CoockiePolicy() {

  return (
    <section className='footerPages'>
      <BigTitle id='coockie-policy'>
        Coockie Policy
      </BigTitle>

      <article className='footerPages__container'>
        <LastUpdate data='august 2022'>
          <List
            textBefore={<Paragrafs
              paragrafs={[
                'We use Cookies to enhance the experience of our users and make our Services more convenient, for security, and to analyze our traffic. Cookies are small data files, which may include an anonymous unique identifier, that is sent to your browser from the website and stored on your computer`s hard drive.',
                'We use cookies to recognize your browser or device, provide you with essential features and services and for additional purposes, including:'
              ]}
            />}
            list={[
              'Recognizing you when you sign-in to use our services;',
              'Enhance experience;',
              'Improving security;',
              'Preventing fraudulent activity;',
              'Tracking agreement to the Services;',
              'Reporting. This allows us to measure and analyze the performance of our services;',
              'Analytic practices that help us understand your activities on our Services.'
            ]}
            textAfter={<Paragrafs
              paragrafs={['We use the following cookies on or in relation to our website:']}
            />}
          />
        </LastUpdate>

        <Table
          Coockie={[
            {
              name: 'ss_id3fas',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to keep track of your visit and recognizes on the next page that you retrieve that you are the same person who viewed the previous page. This means, for example, that you are logged in.',
              period: 'Session'
            },
            {
              name: 'ac_3w5v6x',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to track user choices on our exchange form.',
              period: '14 Days'
            },
            {
              name: 'dc_4a9f1f',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to track user choices on our exchange form.',
              period: '14 Days'
            },
            {
              name: 'dn_dv9k1s',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to track user choices on our exchange form.',
              period: '14 Days'
            },
            {
              name: 'rc_59fdae',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to track user choices on our exchange form.',
              period: '14 Days'
            },
            {
              name: 'rn_29fxf1',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to track user choices on our exchange form.',
              period: '14 Days'
            },
            {
              name: 'vp_5kCofK',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to track user choices on our exchange form.',
              period: '30 Days'
            },
            {
              name: 'rf_2i3dv4d',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to identify if the user originates from affiliate partner.',
              period: '30 Days'
            },
            {
              name: 'ak_2kv5id4',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to determine if a user has aknowledge our warning notices.',
              period: '30 Days'
            },
            {
              name: 'ck_3c9l8x2',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to determine if a user has accepted our cookies notice.',
              period: '1 Years'
            },
            {
              name: 'tm_6c7k8s9',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to determine if a user has accepted our Terms of Service, Privacy Policy, and AML Policy.',
              period: '6 Months'
            },
            {
              name: 'lg_45d3k2d',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to track user login status on our service. - Stored in Local storage.',
              period: 'Persistent'
            },
            {
              name: 'de_vid23f',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to identify users using our service.',
              period: '2 Years'
            },
            {
              name: 'uo_23c3x2m',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to identify users using our service.',
              period: '2 Years'
            },
            {
              name: 'lo_1hsm59',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to identify user preferred language.',
              period: '2 Years'
            },
            {
              name: 'au_the2c3',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to identify users using our service.',
              period: '90 Days'
            },
            {
              name: 'or_9k7j2c',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to identify users using our service.',
              period: '1 Day'
            },
            {
              name: 'to_32s5ds8',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to identify users using our service.',
              period: '2 Days'
            },
            {
              name: 'sy_ti325ga',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to synchronize user browser time with our server time. - Stored in Local storage.',
              period: 'Persistent'
            },
            {
              name: 'er_9skCks',
              type: 'Functional',
              party: 'WhitePhoenix',
              target: 'This cookie is used to track errors occured on user device',
              period: '10 Days'
            },
            {
              name: '_cfduid',
              type: 'Functional',
              party: 'Cloudflare',
              target: 'This cookie helps Cloudflare detect malicious visitors to our Customers` websites and minimizes blocking legitimate users. It may be placed on the devices of our customers` End Users to identify individual clients behind a shared IP address and apply security settings on a per-client basis. It is necessary for supporting Cloudflar`s security features',
              period: '30 Days'
            },
            {
              name: '_GRECAPTCHA',
              type: 'Functional',
              party: 'Google',
              target: 'This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.',
              period: '180 Days'
            },
            {
              name: 'rc::a',
              type: 'Functional',
              party: 'Google',
              target: 'This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.',
              period: 'Persistent'
            },
            {
              name: 'rc::b',
              type: 'Functional',
              party: 'Google',
              target: 'This cookie is used to distinguish between humans and bots.',
              period: 'Session'
            },
            {
              name: 'rc::c',
              type: 'Functional',
              party: 'Google',
              target: 'This cookie is used to distinguish between humans and bots.',
              period: 'Session'
            },
            {
              name: '_ga',
              type: 'Analytical',
              party: 'Google',
              target: <> This cookie is set by Google Analytics and we use it to analyze the behavior of visitors to our website in order to improve our Services.More details about Google analytics can be found {(<a href='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage' className='link_footerPages link'>here</a>)}.</>,
              period: '2 Years'
            },
            {
              name: '_gat_gtag_UA_145323566_1',
              type: 'Analytical',
              party: 'Google',
              target: <> Used to throttle request rate. More details about Google analytics can be found {(<a href='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage' className='link_footerPages link'>here</a>)}.</>,
              period: '1 Minute'
            },
            {
              name: '_gid',
              type: 'Analytical',
              party: 'Google',
              target: <> Used to throttle request rate. More details about Google analytics can be found {(<a href='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage' className='link_footerPages link'>here</a>)}.</>,
              period: '24 Hours'
            }
          ]}
        />

        <Paragrafs
          paragrafs={[
            'You can manage cookies through the settings of your internet browser, and delete individual cookies or delete all cookies. You are welcome to block the use of some or all of the cookies we use on our website. However, please be aware that doing so may impair our website and its functionality or may even render some or all of it unusable.'
          ]}
        />

      </article >
    </section >
  )

}

export default CoockiePolicy;
