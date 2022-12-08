
import BigTitle from './../../components/BigTitle/BigTitle.js';
import LastUpdate from './../../components/FooterPages/LastUpdate/LastUpdate.js';

import Title from './../../components/FooterPages/Title/Title.js';
import Paragrafs from './../../components/FooterPages/Paragrafs/Paragrafs.js';
import List from './../../components/FooterPages/List/List.js';
import { NavLink } from 'react-router-dom';

function PrivacyPolicy() {

  const name = 'Privacy Policy';

  window.scrollTo(0, 0);

  return (
    <section className='footerPages'>
      <BigTitle id='privacy-policy'>
        Privacy Policy
      </BigTitle>

      <article className='footerPages__container'>
        <LastUpdate data='june 2022'>
          In WhitePhoenix, we respect your privacy so we make serious efforts to protect it, prevent any type of personal information misuse as well as make sure that the collection and processing are always done with transparency and responsibility while keeping you in absolute control at all times.
        </LastUpdate>

        <Paragrafs
          paragrafs={[
            'In WhitePhoenix, we respect your privacy so we make serious efforts to protect it, prevent any type of personal information misuse as well as make sure that the collection and processing are always done with transparency and responsibility while keeping you in absolute control at all times.',
            'By using our website (https://phoenixw.com), ("Website"), our application programming interface (https://api.phoenixw.com), ("API"), or our mobile application, ("Mobile App"), all referred to as ("Services" or "Service") we may collect, or you may voluntarily provide us with information.',
            'This Privacy Policy is in accordance with the EU General Data Protection Regulation 2018 ("GDPR") and has the intention to acknowledge you what information we may collect about you or you may provide us with, why do we collect such information, how do we process them, with whom we may share them and under which circumstances, how do we protect them, and how you can update, manage, export, and delete your information making use of your rights which we also demonstrate.',
            'With the term, "Information", as it is used in this Privacy Policy is meant any type of information that, will enable your direct or indirect specification by using various identifiers that we may collect or you may voluntarily provide us with, such as your name, your email address, your IP address or any other method or information that may be used in order to specify you.',
            'Any use of the Services mirrors your acceptance to this Privacy Policy so please read it carefully and if you do not agree you should avoid/stop using any of the Services provided by us. If you have any questions, please contact us at support@phoenixw.com.'

          ]} />

        <Title id={`${name} 1`}>
          1. Collected Information
        </Title>

        <Paragrafs
          paragrafs={[
            'When you access or use our Services, we use different methods to collect information from and about you. We can classify that information into two categories, those that may be provided by you, and those that we may collect.'
          ]} />


        <Title subTitle={true} id={`${name} 1.1`}>
          1.1 Information that you provided to us
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={['While using our Services you may provide us with:']}
          />}
          list={[
            'Information that is necessary for registration. In order to access the full functionality of the Service, you will have to register for a member account. When you go through the registration process, you shall provide an email address and create a password;',
            'Information relating to orders placed on our Service;',
            'Any kind of data like email address, mailing addresses, etc. by filling in any kind of form while using our Services;',
            'Any information and identification documents which we may request from you, aimed, without limitation, to prevent illegal activities and ensure compliance with our Terms of Service.']}
        />


        <Title subTitle={true} id={`${name} 1.2`}>
          1.2 Information we may collect
        </Title>

        <Paragrafs
          paragrafs={[
            <>
              As you interact with our Services, we may automatically collect technical information about your equipment, the date you have accessed our Service, location, IP address, and the domain name. This information may be directly obtained by us or through third-party services. We may collect this information by using cookies, server logs, and other similar technologies. The content recorded on access logs is not used in conjunction with the information. It is used as server operation information to assist in improving our Services. For more information about our cookies please refer to our {(<NavLink to='/Policies/Coockie_Policy' className='link_footerPages link'>Cookie Policy</NavLink>)}.
            </>,
            'Also, we use Google Analytics on our Service. If You want to know more about Google Analytics and its “do not track” policy, please visit google analytics.'
          ]}
        />


        <Title id={`${name} 2`}>
          2. Why and when we process your information
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={['We will use and process your information:']}
          />}
          list={[
            'For internal business intelligence purposes, to conduct research, product development, and enhancement;',
            'To inform you of changes made to our Services;',
            'For promotional purposes, we may send out emails to your email address. You may unsubscribe from receiving these emails by following the instructions included in these emails, or by contacting us at support@phoenixw.com;',
            'To ensure that content from our Service is presented most effectively for you and your computer; To display content based on your interests;',
            'To respond to your questions and provide related customer services;',
            'To confirm your identity when and if such procedure may be a requirement;',
            'To monitor and protect the security of our information, systems, and network;',
            'For residents of the European Economic Area, “EEA”, the United Kingdom, and Switzerland pursuant to Art. 6, GDPR, we process this information to comply with our legal obligations;',
            'When we need it to provide the Services, provide customer support and personalized features;',
            'To protect the safety and security of the Services;',
            'When it satisfies a legitimate interest (which is not overridden by your rights), such as for research and development, to market and promote the Services;',
            'To protect our legal rights and interests;',
            'When you give us your consent to do so for a specific purpose;',
            'When we need to process your information to comply with a legal obligation or requests from governmental or statutory authorities.',
          ]}
          textAfter={<Paragrafs
            paragrafs={[
              <>
                Your information may be processed for risk management purposes, to detect and prevent fraud and illegal activities, and in order to ensure compliance with all applicable laws. Such processing is part of our Anti-Money Laundering measures and is achieved via automated software or manually. For more information please refer to our {(<NavLink to='/Policies/AMC_Policy' className='link_footerPages link'>AML Policy</NavLink>)}.'
              </>
            ]}
          />
          }
        />


        <Title id={`${name} 3`}>
          3. With whom, why, and when, such information may be shared
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={['Such information may be shared with law enforcement, officials, or third parties:']}
          />}
          list={[
            'When we are obliged to do so by a governmental request, court order, competent authority`s official request, or similar legal procedure.',
            'Out of a good faith belief that the disclosure of the information is reasonably necessary to prevent, report and protect from, fraud, money-laundering, financial loss, and other suspected illegal activities.',
            'To, internally, or externally via our third-party partners, investigate violations of our Terms of Service or any other applicable policies and laws in order to ensure compliance with our legal obligations.',
            'In some instances, processing and sharing of your information with partner companies may be necessary for us to continue to provide our services to you.'
          ]} />

        <Title id={`${name} 4`}>
          4. How do we protect your information
        </Title>

        <Paragrafs
          paragrafs={[
            'For us, maintaining your privacy and avoiding misuse or unauthorized disclosure of your information is a priority, which is why in WhitePhoenix, with absolute responsibility to its` users and their rights, apply various technical, physical and administrative safeguards in order to protect the security and confidentiality of the information you entrust us with.',
            'We will store your information, in a form that permits us to identify you, for no longer than is necessary for the purpose for which the information is processed. We maintain your information only for as long as it is necessary to comply with our legal obligations, resolve disputes, enforce our agreements and rights, or if it is not technically and reasonably feasible to remove it, and for any other reason as they are described in the sections above.',
            'After your relevant request, we will erase your information without undue delay with respect to your rights as they are described further below in your rights section of this Privacy Policy. To request your information erasure, please contact us at support@phoenixw.com.',
            'Furthermore, we cannot ensure or warrant the security or confidentiality of the information you transmit to us or receive from us by Internet or wireless connection, including email, phone, or SMS, since we have no way of protecting that information once it leaves and until it reaches us. If you have any reason to believe that your data is no longer secure, please contact us at support@phoenixw.com.'

          ]}
        />


        <Title id={`${name} 5`}>
          5. Children
        </Title>

        <Paragrafs
          paragrafs={[
            'We do not intend to solicit or collect information from anyone under the age of 18 or under the legal age of your country if it is higher. If you are under 18 or are not of the legal age of your country, do not enter any information on our Services.'
          ]}
        />


        <Title id={`${name} 6`}>
          6. Your Rights
        </Title>

        <Title subTitle={true} id={`${name} 6.1`}>
          6.1 Right to access
        </Title>

        <Paragrafs
          paragrafs={[
            'You have the right to access information concerning your information that are processed by us and you can request a copy of them. This means that we are obliged to provide you with all the information relevant to which categories of your information we use, for how long we store them, who are the recipients of those data and what are the purposes of processing them. The legal basis is Art. 15, GDPR.'
          ]}
        />

        <Title subTitle={true} id={`${name} 6.2`}>
          6.2 Right to rectification
        </Title>

        <Paragrafs
          paragrafs={[
            'Should you notice that your information are incomplete, you can provide us with a supplementary statement. Should you notice that there are inaccuracies regarding your information, you can exercise your right to rectification, which means that we are obliged to make the essential corrections. The legal basis is Art. 16, GDPR.'
          ]}
        />

        <Title subTitle={true} id={`${name} 6.3`}>
          6.3 Right to erasure
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={[
              'You have the right to request erasure of your personal information, and we are obliged to comply without undue delay, under the following conditions:'
            ]}
          />}
          list={[
            'The information are no longer necessary in relation to the purposes for which they were collected or processed;',
            'You withdraw your consent with our Terms of Service and there is no other legal ground for the processing;',
            'You exercise your right to object;',
            'The information have been unlawfully processed;',
            'The information has to be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject.'
          ]}
          textAfter={<Paragrafs
            paragrafs={[
              'The aforementioned conditions are void in case processing is necessary for compliance with a legal obligation which requires processing by Union or Member State law to which we are subject, or for the performance of a task carried out in the public interest, or in the exercise of official authority vested in us, for the establishment, exercise or defense of legal claims, and other exceptions enumerated in article 17, paragraph 3 of GDPR. The legal basis is Art. 17, GDPR.',
              'In order to request erasure of your personal information, please navigate to the settings of your account`s dashboard, and deactivate your account by pressing the "Deactivate account" button. By deactivating your account you withdraw your consent with our Terms of Service and your account is restricted for further usage. Following the account deactivation, you may contact us at support@phoenixw.com with the subject "Information Erasure" and request to erase your personal information.'
            ]}
          />}
        />

        <Title subTitle={true} id={`${name} 6.4`}>
          6.4 Right to object
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={[
              'Unless there are compelling reasons to process your data, you have the right to object to the processing of your information in certain circumstances. Specifically, you can object if the processing is for:'
            ]}
          />}
          list={[
            'A task carried out in the public interest;',
            'The exercise of official authority vested in us;',
            'Our legitimate interests (or those of a third party).'
          ]}
          textAfter={<Paragrafs
            paragrafs={[
              'When the processing is for direct marketing purposes, including profiling, your right to object is absolute and you can exercise it at any time and free of charge. The legal basis is Art. 21, GDPR.'
            ]}
          />}
        />

        <Title subTitle={true} id={`${name} 6.5`}>
          6.5 Right to restriction
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={[
              'In addition, you have the right to restriction of processing of information concerning you under the following conditions:'
            ]}
          />}
          list={[
            'The accuracy of the information is contested by you, for a period enabling us to verify the accuracy of the information;',
            'The processing is unlawful and you oppose the erasure of the information and request the restriction of their use instead;',
            'We no longer need the information for the purposes of the processing, but they are required by you for the establishment, exercise or defense of legal claims;',
            'You have objected to processing pending the verification whether the legitimate grounds of ours override those of yours.'
          ]}
          textAfter={<Paragrafs
            paragrafs={[
              'In all the aforementioned circumstances, such information shall only be processed with your consent or for the establishment, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the Union or of a Member State. The legal basis is Art. 18, GDPR.'
            ]}
          />}
        />

        <Title subTitle={true} id={`${name} 6.6`}>
          6.6 Right to lodge a complaint
        </Title>

        <Paragrafs
          paragrafs={[
            <>
              In case you believe that the processing of your information by us is unlawful, you have the right to lodge a complaint with a supervisory authority. The legal basis is Art. 12, Par. 4, GDPR. These are the country commissioners for data protection, the contact person responsible for you can be found eg at the following URL: {(<a href='https://www.cpdp.bg/' className='link_footerPages link'>https://www.cpdp.bg/</a>)}
            </>
          ]}
        />

        <Title subTitle={true} id={`${name} 6.7`}>
          6.7 Right to data portability
        </Title>

        <Paragrafs
          paragrafs={[
            <>
              You have the right to data portability, which means that you have the right to receive your information processed by us in a structured, commonly used and machine-readable format and transmit those data to another controller without hindrance from us. The legal basis is Art. 20, GDPR.
            </>
          ]}
        />

        <Title subTitle={true} id={`${name} 6.8`}>
          6.8 Right to information
        </Title>

        <Paragrafs
          paragrafs={[
            <>
              You have the right to information about any rectification or erasure of your information or restriction of processing carried out in accordance with Article 16, Article 17(1) and Article 18, GDPR to each recipient to whom the information have been disclosed unless this proves impossible or involves a disproportionate effort. We shall inform you about those recipients if you request it. The legal basis is Art. 19 GDPR.
            </>
          ]}
        />

        <Title subTitle={true} id={`${name} 6.9`}>
          6.9 Right to revoke a consent
        </Title>

        <Paragrafs
          paragrafs={[
            'You have the right to withdrawal your consent at any time, but this won`t affect the lawfulness of processing based on consent before its withdrawal. The legal basis is Art. 7, Par. 3, GDPR.'
          ]}
        />

        <Title id={`${name} 7`}>
          7. Policy Modifications
        </Title>

        <Paragrafs
          paragrafs={[
            'This Policy may be amended at our full discretion without prior notice. We encourage you to review it periodically in order to be aware of the changes we may have made. Reading it carefully and checking for any modifications is your responsibility. By using the Services, you accept and agree to the Privacy Policy, Terms of Service, and AML Policy.'
          ]}
        />


        <Title id={`${name} 8`}>
          8. Contact us
        </Title>

        <Paragrafs
          paragrafs={[
            'If you have any questions regarding our policy or privacy practices, please contact us at support@phoenixw.com.'
          ]}
        />

      </article>
    </section >
  )

}

export default PrivacyPolicy;