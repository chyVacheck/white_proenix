
import BigTitle from './../components/BigTitle/BigTitle.js';
import LastUpdate from './../components/LastUpdate/LastUpdate.js';

import Paragrafs from './../components/FooterPages/Paragrafs/Paragrafs.js';
import List from './../components/FooterPages/List/List.js';

function PrivacyPolicy() {

  return (
    <section className='footerPages'>
      <BigTitle id='aml-policy'>
        AML policy
      </BigTitle>

      <article className='footerPages__container'>
        <LastUpdate data='july 2022'>
          <>
            <Paragrafs
              paragrafs={[
                'This Anti-Money Laundering Policy (hereinafter referred to as "AML Policy", or "Policy") outlines the provisions and predefined procedures after which WhitePhoenix (hereinafter referred to as "WhitePhoenix", "we", "Us", "Our", or, "Service") is preventing any illegal activity from occurring and ensuring compliance with all applicable laws and regulations related to AML/KYC (referring to "Anti-Money Laundering" and "Know Your Customer" respectively).',
                'We strive to promote security for our clients and protect them from any fraudulent activity. In this regard, our team has developed an internal AML/KYC procedure backed up by an automated risk-based approach and dynamic exchange limits. Our system is making multiple checks, based on various criteria and parameters, and is proved to be very effective in identifying suspicious transactions and user activity. Further explanation or disclosure of the criteria and parameters contributing to the risk score can not be provided, so as to maintain and ensure the effectiveness of our system, to those who would try to bypass it, and against any illegal activity.',
                'If a transaction scores high in our risk system, it is put on hold, and an Action Request is triggered. The client, whose transaction is on hold, is requested to create an account (if he/she was exchanging as a Guest) and validate it through a basic KYC verification procedure, in order for the transaction to be processed.',
                'By using our Services, you agree to pass KYC verification procedures, which may be applied to you. As part of such procedures, WhitePhoenix, and our partnered mediating exchange service providers, if any, may request information and documents, aiming, but not limited, to identify the client, to prove the source of the funds, and to ascertain the user’s compliance with our TOS, our partner’s TOS if any, along with any applicable law.',
                'We reserve the right to verify your identity on an ongoing basis, proactively in case of any occurrence such as a change in your identification, and especially when your activity is deemed as suspicious. Your activity may be deemed as suspicious through our automated risk-based approach and/or at our sole discretion. We reserve the right to request up-to-date documents from you, even if you have passed a KYC verification procedure in the past.'

              ]} />
            <List
              textBefore={<Paragrafs
                paragrafs={['In the AML/KYC procedure, the clients are usually requested to provide us with the following:']}
              />}
              list={[
                'A high-quality photo of his/her ID and/or passport, valid in their country;',
                'A high-quality photo of the user to evaluate if it matches the document provided in the previous step;',
                'Liveness checks, referring to random instructions to ascertain that the KYC is conducted live per our request;',
                'Source of Funds or any other applicable documentation that may be deemed necessary at our own discretion to ascertain the user`s compliance with our TOS and the applicable laws;'
              ]}
              textAfter={<Paragrafs
                paragrafs={[
                  'When we are provided with the requested documentation we programmatically perform an evaluation with the assistance of AI software and if the documents and the procedure are found to be valid and in line with our TOS and applicable laws, the transaction is processed automatically.'
                ]}
              />}
            />

            <Paragrafs
              paragrafs={[
                'In the event that the user fails to successfully complete the KYC verification and/or whose details and account(s) appear to be blacklisted and/or on sanction lists, and/or in violation of our Customer Acceptance Policy or TOS, and/or fails to provide the requested documentation, and/or what provided can not be deemed as authentic, WhitePhoenix reserves the right to refuse - stop providing its services to the client, the transaction will not be processed, and the deposited amount will be refunded, however, the client is liable to compensatory charges for any damages WhitePhoenix may suffer in this regard.'
              ]}
            />

            <List
              textBefore={<Paragrafs
                paragrafs={['In cases where:']}
              />}
              list={[
                'we suspect that a user has failed to perform a KYC on our relevant request in the past, or',
                'the transaction is suspected of being related to illegal activities,'
              ]}
              textAfter={<Paragrafs
                paragrafs={[
                  'we reserve the right to freeze the transaction and/or transfer the frozen funds to a cold storage wallet for any period of time necessary to complete the investigation and our AML/KYC procedure, and/or report the case to authorities for further investigation.'
                ]}
              />}
            />

            <Paragrafs
              paragrafs={[
                'The provided by the user documentation will be securely stored according to the provisions of the applicable data protection laws and for so long as required by law. Such documents are never disclosed to anyone, excluding competent authorities, and only after their relevant official request.',
                'WhitePhoenix, reserves the right to appoint a third-party service provider certified in relevant procedures, for the purpose of documentation reviewing, ascertaining the authenticity of the provided documents, and carrying out the verification on our behalf. Such a third-party service provider will be ensured to comply with our Privacy Policy and the applicable data protection laws to guarantee the secure process and confidentiality of users’ personal information.',
                'WhitePhoenix takes all necessary actions and measures, uses the best available practices, and the most efficient course of action in order to prevent any fraudulent - illegal activity from occurring. Subsequently, we do not engage in any way and refuse to develop any business relationship, and/or provide our services to any legal entity suspected of money laundering, terrorism financing, corruption, fraud, illegal transfer of assets, drugs, humans, organs, and/or any other illegal trafficking, and/or any other illegal activity. In no event shall WhitePhoenix, the owner, our directors, officers, members, or any kind of employees or agents, be liable or responsible, if our services are being used by any client, for any illegal activity and/or in violation of any applicable law, regardless of if the associated user has passed a KYC verification procedure, and exempts liability, for any deficiency or error that may arise as a result of human or system error, in identifying any suspicious transaction and/or user activity, and in proactively denying our services to any user suspected of, or associated with, any illegal activity.',
                'If you have any questions related to our AML Policy, feel free to contact our legal department at legal@wphoenix.com.'
              ]}
            />

          </>
        </LastUpdate>
      </article>
    </section >
  )

}

export default PrivacyPolicy;
