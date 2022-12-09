
import BigTitle from '../../components/BigTitle/BigTitle.js';
import LastUpdate from '../../components/FooterPages/LastUpdate/LastUpdate.js';

import Title from '../../components/FooterPages/Title/Title.js';
import Paragrafs from '../../components/FooterPages/Paragrafs/Paragrafs.js';
import List from '../../components/FooterPages/List/List.js';

function TermsOfService() {

  const name = 'Terms of Service';

  window.scrollTo(0, 0);

  return (
    <section className='footerPages'>
      <BigTitle id='terms-of-service'>
        Terms Of Service
      </BigTitle>

      <article className='footerPages__container'>
        <LastUpdate data='november 2022'>
          These Terms of Service (hereinafter referred to as "TOS", or "Terms"), are applicable at all times throughout, the WhitePhoenix website (https://phoenixw.com),("Website"), our application programming interface (https://api.phoenixw.com),("API"), and our mobile application,("Mobile App"), (all referred to as "Services"). Our Services are operated and maintained by WhitePhoenix (hereinafter referred to as "WhitePhoenix", "we", "Us", "Our", or, "Service"). Our Services provide you with the ability to exchange one cryptocurrency asset for another. If you haven`t read these Terms in detail, we strongly advise you to do so before using any of our Services. If you do not agree with Our TOS, you should avoid/stop using any of the Services provided by Us. Any use of the Services mirrors your acceptance and bounding to these Terms.
        </LastUpdate>

        <Title id={`${name} 1`}>
          1. Provided Services
        </Title>

        <Paragrafs
          paragrafs={[
            'WhitePhoenix, is a cryptocurrency-to-cryptocurrency exchange service provider, non-custodial, without any fiat exchange capabilities. Our operations mainly run through our website under the domain name phoenixw.com, or through our mobile application, or programmatically through our Application Programming Interface (hereinafter “API”).',
            'Clients are using our service to exchange their cryptocurrency into another cryptocurrency, mainly for investing purposes. For the purpose of completing the exchange and ensure we will provide our users with the best available rate possible, achieved through continuous efforts in the direction of improving the exchange paths, but also for liquidity purposes in order to perform the exchange of the cryptocurrencies, we may use third-party Exchange Service Providers (hereinafter “ESPs”, “ESP”).',
            'After a client places an order he is provided with a deposit address to deposit the amount he wishes to exchange. As soon as the deposit is confirmed, the funds are exchanged to the cryptocurrency indicated by the user when placing his/her order and forwarded to the client in a few minutes'
          ]} />

        <Title id={`${name} 2`}>
          2. Eligibility
        </Title>

        <Title subTitle={true} id={`${name} 2.1`}>
          2.1 General
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={['By using Our Services, you represent and warrant that:']}
          />}
          list={[
            'You are at least 18 years old or of other legal age, according to your relevant jurisdiction;',
            'You are an individual, legal person, or other organization with the full legal capacity to enter into this User Agreement between you and WhitePhoenix;',
            'You are not using WhitePhoenix for the purpose of translating ledger entries with other parties, with the exception of explicit withdrawal for goods and Services. Our Services may be used only as a mechanism of software ledger entry translation between the User and WhitePhoenix;',
            'You are only transacting on WhitePhoenix with legally-obtained funds that belong to you;',
            'You are not furthering, performing, undertaking, engaging in, aiding, or abetting any unlawful activity through your relationship with Us or your use of WhitePhoenix.',
            <>
              <List
                textBefore={<Paragrafs
                  paragrafs={[
                    'You are not a Politically Exposed Person (“PEP”) and that you do not have any relationship (e.g. business partnership, relative, etc,) with any person who may be deemed as a PEP in relation to the PEP definition provided below. Additionally, you are responsible for notifying us in the event that during the course of our interaction and of these Terms you become a PEP.Politically Exposed Person or PEP shall have the definition below and shall include family members and close associates.`Politically Exposed Person` means a natural person who is or who has been entrusted with prominent public functions and includes the following:'
                  ]}
                />}
                list={[
                  'heads of State, heads of government, ministers, and deputy or assistant ministers;',
                  'members of parliament or of similar legislative bodies;',
                  'members of the governing bodies of political parties;',
                  'members of supreme courts, of constitutional courts or of other high-level judicial bodies, the decisions of which are not subject to further appeal, except in exceptional circumstances;',
                  'members of courts of auditors or of the boards of central banks;',
                  'ambassadors, chargés d`affaires and high-ranking officers in the armed forces;',
                  'members of the administrative, management, or supervisory bodies of State-owned enterprises;',
                  'directors, deputy directors, and members of the board or equivalent function of an international organization.'
                ]}
                textAfter={<Paragrafs
                  paragrafs={['WhitePhoenix reserves the right to select its operating jurisdictions and may restrict or deny the Services in certain countries by updating the existing CAP. It is prohibited to gain access or use our Services from any of the above jurisdictions.']}
                />}
              />
            </>,
            <>
              <List
                textBefore={<Paragrafs
                  paragrafs={[
                    'No public function referred to in points (a) to (h) shall be understood as covering middle-ranking or more junior officials;‘family members’ includes the following:'
                  ]}
                />}
                list={[
                  'the spouse, or a person considered to be equivalent to a spouse, of a politically exposed person;',
                  'the children and their spouses, or persons considered to be equivalent to a spouse, of a politically exposed person;',
                  'the parents of a politically exposed person;'
                ]}
              />
            </>,
            <>
              <List
                textBefore={<Paragrafs
                  paragrafs={[
                    '‘close associates’ means:'
                  ]}
                />}
                list={[
                  'natural persons who are known to have joint beneficial ownership of legal entities or legal arrangements, or any other close business relations, with a politically exposed person;',
                  'natural persons who have sole beneficial ownership of a legal entity or legal arrangement which is known to have been set up for the de facto benefit of a politically exposed person.'
                ]}
              />
            </>

          ]}
          textAfter={<Paragrafs
            paragrafs={[
              'WhitePhoenix reserves the right to select its clients and may restrict or deny the Services to users that may be deemed not eligible for the said Services in accordance with this section.'
            ]}
          />}
        />


        <Title subTitle={true} id={`${name} 2.2`}>
          2.2 Customer Acceptance Policy (CAP)
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={['By accessing and using the Services, you represent and warrant that you are not in, under the control of']}
          />}
          list={[
            'Belarus, Cuba, Crimea Democratic Republic Of Congo, Japan, Iran, Iraq, North Korea, South Korea, South Sudan, Sudan, Syria, Zimbabwe, United States of America (including all USA territories like Puerto Rico, American Samoa, Guam, Northern Mariana Island, and the US Virgin Islands (St. Croix, St. John, and St. Thomas)',
            'any other country subject to United Nations Security Council Sanctions List and its equivalent ("Prohibited Jurisdictions"), designated as a "Specially Designated National" by OFAC (Office of Foreign Assets Control of the U.S. Treasury Department), or placed on the U.S. Commerce Department’s "Denied Persons List”;',
            'or a jurisdiction where transactions with crypto assets are explicitly prohibited and the use of Our Services would be illegal or otherwise violate any applicable law.',
          ]}
          textAfter={<Paragrafs
            paragrafs={['WhitePhoenix reserves the right to select its operating jurisdictions and may restrict or deny the Services in certain countries by updating the existing CAP. It is prohibited to gain access or use our Services from any of the above jurisdictions.']}
          />}
        />

        <Title subTitle={true} id={`${name} 2.3`}>
          2.3 API Partners
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={['If you represent a corporation or any other legal entity, using our Services to perform transactions, you warrant that:']}
          />}
          list={[
            'You are responsible and fully understand that you are liable under these Terms for any violation, or any other act or omission;',
            'You are not performing, undertaking, engaging in, aiding, abetting any illegal activity through your engagement with Us or your use of Our Services;',
            'You represent a law-complied corporation and/or other legal entity and that your Use of Our Services is in accordance with the provisions and prerequisites of these Terms, the AML Policy, and any applicable law;',
            'For every use of Our services, you are responsible to store in a safe environment at least the minimum requirements for transaction-related information i.e. the destination coin, the destination amount, and the txid/hash of the transfer, and at least the minimum requirements for user-related information i.e. the IP address (all the above information presented in this section are hereinafter referred to as “Information”);',
            'You are responsible for the maintenance of such Information for as much required by applicable laws;',
            'You are responsible for transferring such Information to Us proactively or per our request through any type of communication method instructed by Us, including but not limited to, email or similar;',
            'You are responsible for resolving within seven (7) calendar days any request you may be instructed by Us in relation to these Terms, Our AML Policy and Our legal obligations, including but not limited to, preventing any illegal activity from occurring or assisting any investigation on suspicious or illegal activity;',
            'Upon realization of any suspicious activity of your account you will be requested to provide Information in accordance with the AML Policy. Your failure to successfully maintain or provide sufficient and accurate information associated with your use of Our services within seven (7) calendar days from our original request, may result in your account being restricted for further usage, and your details to be reported to authorities;',
            'You will cooperate and assist the AML efforts of Our team, and/or of any investigative body and/or of any third party service per Our request, related but not limited to, preventing any illegal activity from occurring or any investigative efforts on any reported or suspected illegal activity;',
            'You are responsible for ensuring that your use of Our Services will be legal at all times and you are taking serious efforts in the direction of preventing any illegal activity from occurring by establishing efficient fraud prevention and Anti-Money Laundering procedures;'
          ]}
        />

        <Title subTitle={true} id={`${name} 2.4`}>
          2.4 Law compliance, Taxes
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={[
              'You are responsible for complying with all applicable laws related to your exchange activities and other use of Our Services, including without limitation any reporting obligations and withdrawal of all applicable taxes if any.',
              'You will determine what, if any, taxes apply to the Trades and any other transactions you complete via the Services, and it is your responsibility to report and remit the correct tax to the appropriate tax authority. WhitePhoenix is not responsible for determining whether taxes apply to your Exchanges or for collecting, reporting, withholding, or remitting any taxes arising from any use of Our Services.',
              'By accessing and using Our Services You warrant that:'
            ]}
          />}
          list={[
            'The crypto assets that you wish to be exchanged are your belongings and that they are not obtained illegally and there are no third party’s rights to your crypto assets;',
            'You will not provide misleading information in any of the fields of our platform;',
            'The mandatory information for performing a transaction e.g. wallet addresses are not in any way associated with any illegal activity;',
            'That using Our Services is legal in your country;',
            'You will immediately stop using Our services if at any point your country prohibits crypto assets or any access and Use of Our Services, regardless if such country is or is not included in Our Customer Acceptance Policy;',
            'You will not attempt to reverse-engineer, modify, disassemble or decompile our systems in any way, and You will not use any automated system like a robot, crawler, or spider for the purpose of extracting data, or any other purpose without Our consent;',
            'You will not encourage any third party to use Our Services on your behalf in violation of these Terms and any applicable law;',
            'You will not attempt to bypass any security measures and any of Our Anti-Money Laundering procedures in place;',
            'You will not attempt to use Our Services in any illegal way and you will not develop any association with Us, if you are engaging in money laundering, terrorism financing, corruption, fraud, illegal transfer of assets, drugs, humans, organs, and/or any other illegal trafficking, and/or any other illegal activity;'
          ]}
        />

        <Title id={`${name} 3`}>
          3. Risk Disclosure
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={[
              'ANY USE OF THE SERVICES INVOLVES SIGNIFICANT FINANCIAL RISK. Crypto assets are experimental and highly volatile as they are in the early stages of development. Accordingly, any engagement with crypto assets includes a plethora of risks, so please make sure that you have made your research, you are well informed, and you understand all the risks associated with dealing in any way with crypto assets. Prior to using our Services and performing any exchange on our platform, you should carefully consider the above and if it would be suitable for you given your financial conditions and available resources.',
              'Some of the major risks associated with any use of our services and any dealing with crypto assets may be found below.',
            ]}
          />}
          list={[
            'You may suffer significant losses or even total loss of your funds and assets as a result of high volatility in the markets and or any deficiency, error, unintended function, and any type of attack.',
            'Engagement with crypto assets involves financial risk for many reasons beyond your understanding and control.',
            'Crypto assets are not backed-up by any specific economy and are not subject to regulations or any form of protection by any governmental body. Accordingly, any use of the services and any dealing with crypto assets in general, implies that you will not be able to enforce any guarantees indemnification or similar, as may be expected when dealing with regulated firms and fiat currencies.',
            'In specific market conditions such as low liquidity, you may be unable to liquidate and or exchange your crypto assets and therefore not be able to use them for your ordinary needs.',
            'Risks associated with the internet-based systems and the underlying Blockchain Technology, such as, deficiencies and errors that may arise as a result of hardware or software or internet connection errors, or malfunction, or unintended/unexpected function or attack on the involved networks, systems, and Blockchains.',
          ]}
          textAfter={<Paragrafs
            paragrafs={[
              'You acknowledge and understand that you are fully responsible for any decision, action, and use of our Services along with any associated risk. WhitePhoenix, will never provide any investment advice related to your exchanges, neither will make any recommendation intended to persuade you or affect your decision to exchange any specific pair of crypto assets.',
              'BY DEALING WITH CRYPTO ASSETS AND USING OUR SERVICES, YOU ARE PRONE TO SUBSTANTIAL FINANCIAL LOSSES. THEREFORE, YOU MUST EXERCISE CAUTIOUSNESS, ASSUME FULL RESPONSIBILITY, BE AWARE AT ALL TIMES, AND HAVE A CLEAR AND IN-DEPTH UNDERSTANDING OF THE NUMEROUS RISKS INVOLVED AS OUTLINED IN THIS CHAPTER, ALONG WITH ANY OTHER POSSIBLE RISKS BEYOND YOUR KNOWLEDGE AND CONTROL.',
              'WARNING: There may are fake websites pretending to be WhitePhoenix (aka "phishing scams"). They may use a misspelled URL that looks like "https://phoenixw.com" in order to trick users into sending them funds. DO NOT USE ANY SERVICE THAT ISN’T EXACTLY LOCATED AT THE DOMAIN: "https://phoenixw.com" WhitePhoenix is not responsible for funds that have been sent to these fake WhitePhoenix phishing sites. It is important that all users verify they are visiting the correct URL (phoenixw.com) and search for the security certificate in the URL bar of their browser. Also, never trust private messages, solicitations, or requests for funds from people claiming to be WhitePhoenix unless you have verified that it is an official request from a company employee. When in doubt, contact us directly to verify any messaging. Stay diligent – and please report any phishing scams.'
            ]}
          />}
        />

        <Title subTitle={true} id={`${name} 4`}>
          4. Personal Information and Privacy
        </Title>

        <List
          list={[
            'WhitePhoenix respects the privacy of its Users and does not request any information that is unnecessary for the use of the Service or to comport with our obligations under applicable law.',
            'By entering and using Our Services we may collect, or you may voluntarily provide us with personal information mandatory to provide you with Our exchange capabilities and ensure compliance with all applicable laws.',
            'We take serious efforts to protect any personal information collected by you and prevent any type of misuse as well as make sure that the collection and processing are always done with transparency and responsibility while keeping you in absolute control of them at all times.',
            'For more information about the personal data that we may collect, how and when they may be processed, how their confidentiality is being ensured and more, please refer to Our official Privacy Policy.',
            'WhitePhoenix does not in any way obscure the information that it does request or obtain. Due to the inherent transparency of blockchains, transactions to and from WhitePhoenix are public and easily correlated. Law enforcement has full access to blockchain information that goes in or out of WhitePhoenix’s systems.',
            'Never share your transaction information, including but not limited to, your Order ID, transaction hash, addresses related to your transaction, your email, username, or password associated with your WhitePhoenix account with anyone else unless you are requested by Us to do so.',
            'Our representatives will communicate with you requesting any of the above information (except passwords) for the purpose of resolving any issue with your transaction, or providing you support per your relevant request, or after any legal compliance requirement in relation to our AML Policy.',
            'Our representatives will only contact you from email threads @phoenixw.com. If you notice any abnormal behavior or you are not sure if any request addressed to you is legitimate you should notify us immediately in our Contact Us form, from the Support Center. A representative will attend to your needs as soon as possible and ascertain the authenticity of the relevant request accordingly.',
            'WhitePhoenix will not ask for any password from its users nor ask users to transfer funds that are not listed on its platform. Users are encouraged to exercise prudence in dealing with discounts or promotions that could lead to them getting scammed. While the list is non-exhaustive, you agree that WhitePhoenix will not be held responsible for any losses arising from such and any similar occurrences.',
            'By using Our Services, you declare that all information to the WhitePhoenix website and in these Terms is true, accurate, and complete.',
            'WhitePhoenix utilizes the most efficient course of action, takes all the necessary measures, and uses the best available practices to ensure the confidentiality of your personal information. In no event shall WhitePhoenix, Our owners, directors, officers, members, or any kind of employees, be liable or responsible if any information leakage occurs, and exempts liability for any such incident that might occur as a result of system or human error.',

          ]}
        />

        <Title subTitle={true} id={`${name} 5`}>
          5. Limitation of Liabilities
        </Title>

        <Paragrafs
          paragrafs={[
            'Use of WhitePhoenix and its Services may carry financial risk and is to be used as an experimental software utility only. In no event shall WhitePhoenix, the owner, our directors, officers, members, or any kind of employes or agents be liable or responsible for any damages, claims, applications, losses, injuries, delays, accidents, costs, business interruption costs, or other expenses (including, without limitation, attorneys’ fees or the costs of any claim or suit), nor for any incidental, direct, indirect, general, special, punitive, exemplary, or consequential damages, loss of goodwill or business profits, loss of cryptocurrency or digital assets, work stoppage, data loss, computer failure or malfunction, or any other commercial or other losses directly or indirectly arising out of or related to: our Terms; the Privacy and Transparency Statement; any Service of WhitePhoenix; the use of WhitePhoenix; any use of your digital assets or cryptocurrency on WhitePhoenix by any other party not authorized by you (collectively, all of the foregoing items shall be referred to herein as "Losses"). WhitePhoenix is hereby released by you from liability for any and all Losses. We disclaim any and all warranties or guarantees, including any warranty of merchantability and warranty of fitness for any particular purpose. The foregoing limitations of liability shall apply whether the alleged liability or Losses are based on contract, negligence, tort, strict liability, or any other basis, even if WhitePhoenix has been advised of or should have known of the possibility of such losses and damages, and without regard to the success or effectiveness of other remedies.'
          ]}
        />


        <Title subTitle={true} id={`${name} 6`}>
          6. Returns and Refund Policy
        </Title>

        <List
          textBefore={<Paragrafs
            paragrafs={[
              'Cryptocurrencies, tokens, and digital assets are, by their nature, generally irreversible, and their exchange rates are highly volatile and transitory. We cannot be responsible for any risk in the use of the Website, including but not limited to exchange rate risk and market risk. All sales after an WhitePhoenix exchange are final.'
            ]}
          />}
          list={[
            'Unsupported coins/tokens that are deposited into our system to unrelated wallets cannot be extracted or returned. WhitePhoenix reserves the right to handle this on a case-by-case basis. Any decisions by WhitePhoenix with respect to such coins or tokens being deposited when no longer supported are final.',
            'WhitePhoenix only accepts one deposit per transaction ID. If your funds are deposited in a more than one deposit, you will need to contact support to receive a refund. The exchange rate will not be honored and your exchange cannot be completed.',
            'It is the customer`s responsibility to maintain the Transaction ID and Blockchain transfer Hash/TXID, as it is a requirement in submitting a ticket. WhitePhoenix has no obligation to reply to tickets without Transaction ID and Blockchain transfer Hash/TXID.',
            'The minimum deposit amount depends on the selected currency. The minimum amount may fluctuate over time, you may find the current minimum deposit amount per currency on the exchange form. Transactions or possible refunds that do not meet the minimum deposit limitation will not be processed and will stay in WhitePhoenix`s balance until the above requirement is met.',
            'The maximum deposit amount depends on the selected currency. The maximum amount may fluctuate over time, you may find the current maximum deposit amount per currency on the exchange form. Transactions that do not meet the maximum deposit limitation may be refunded as the whole deposit amount at once or in parts of one maximum deposit amount per day.',
            'Deposits that are credited in our addresses without being associated with an active order will be treated as unspecified deposits and will be kept in our systems. In addition, if for any order, the transaction can not be completed, the deposited amount remains in our systems. In such cases, and in all possible situations, after which your deposit remains in our systems WhitePhoenix will try to contact you to inform you and issue a refund. If we do not have any contact information you will have to contact us yourself at support@phoenixw.com to request a refund. On the email, you may use as subject "Claim Deposit" and you will have to provide information such as the Blockchain transfer Hash/TXID, wallet addresses involved, sent currency, amount, or any other information that may be required in order to verify the ownership of the funds. Once you contact us and provide the above, a refund will be issued to the originating address.'

          ]}
        />


        <Title subTitle={true} id={`${name} 7`}>
          7. Applicable Costs
        </Title>

        <Paragrafs
          paragrafs={[
            'WhitePhoenix reserves the right to recover reasonable resolution costs, for out of pocket expenses or time spent addressing a customer issue in the event where the customer issue, relating to a transaction or any use of our services, did not occur as part of any deficiency or error that may arise as a result of system or human error i.e. is not caused by our systems or owners’, directors’, officers’, members’, or any kind of employees’, negligence.',
            'In any such issue where extra resolution costs may be applicable, you will be acknowledged of the estimated costs for the resolution, through email correspondence. If such costs can not be payable through the transaction (by collecting an extra fee), you will have to proceed with a separate payment beforehand, and according to our instructions. If no separate payment is received as a payment for the estimated applicable resolution costs for your issue, WhitePhoenix reserves the right to ignore it.'
          ]}
        />

        <Title subTitle={true} id={`${name} 8`}>
          8. Exchange Rates, Fees, Commissions, and Confirmations
        </Title>

        <Paragrafs
          paragrafs={[
            'Please be aware that the initial exchange rate is only an estimation. WhitePhoenix makes considerable efforts to provide the most accurate exchange estimation, but this information is subject to inevitable volatility and changes may occur, associated but not limited to, the highly volatile and risky nature of virtual assets. The real exchange rate you receive is calculated after your payment is confirmed and your funds are being exchanged. In accordance with the various blockchain networks and providers, your deposit takes some time to be confirmed. Please be acknowledged that the broadcast of a transfer to the blockchain network does not mirror WhitePhoenix’s acceptance of that transfer and we are neither responsible for such confirmation procedures nor do we affect the time required. In that time required rates are subject to change.',
            'WhitePhoenix reserves the right to levy service fees/commissions on users who use its services. It is at the discretion of WhitePhoenix to adjust the service fees/commissions charged to clients using its services. Exchange fees demonstrated on the exchange form, fee structure table, and account overview is just an estimation. WhitePhoenix takes substantial efforts in the direction of calculating a precise estimation of all applicable costs and provides such estimation on the initial rates, but such estimation is vulnerable to fluctuation in relation to numerous factors. In order to provide our services to you, we inevitably are engaging with multiple ESP’s (Exchange Service Providers), blockchain networks, miners, etc, directly or indirectly, and on various market conditions (high or low volatility periods, high or low congestion networks, etc). All WhitePhoenix’s, ESP’s, and blockchain’s (miner’s), exchange fees, extra commissions, network fees, etc, across all possible market conditions, which may be applicable in relation to the numerous ESP’s, coins, and blockchain networks involved in a transaction, are subject to change without prior notice and are effectively calculated in each instance separately at the time of the exchange and are extracted from the final amount.',
            'All the above charges that may be applicable in each transaction for all the beneficiaries as outlined above are always included in the final rate (meaning it’s already extracted) and by no means you are obliged to pay any additional or hidden fees directly to WhitePhoenix unless otherwise specified by these Terms.'
          ]}
        />

        <Title subTitle={true} id={`${name} 9`}>
          9. Governing Law and Disputes
        </Title>

        <Paragrafs
          paragrafs={[
            'These Terms are governed by and construed in accordance with the laws of Cyprus, and any laws applicable therein.',
            'By using our Services, You express your unconditional consent and irrevocably agree that any suit, action, or proceeding, arising out of the Terms or your use of our Service, that may be pursued by You will proceed to the courts of Cyprus, except for all disputes subject to arbitration.',
            'WhitePhoenix and You, agree to arbitrate any dispute arising from these Terms or your use of our Service, with the exception of disputes arising out of infringements of registered or unregistered trademarks, copyrights, trade names, logos, or patents, in which either party may be seeking any type of relief.',
            'WhitePhoenix and You, agree to notify each other of any dispute in less than thirty (30) days from the time that it arises. You may notify WhitePhoenix of such a dispute by contacting our legal department through email at legal@phoenixw.com.',
            'You agree that you will take action and serious efforts in the direction of an informal resolution by contacting us directly and explaining the source of the dispute. WhitePhoenix will take the necessary course of action to resolve any type of dispute if possible. If no satisfying resolution is achieved regarding the matter, the dispute shall be resolved through arbitration conducted in confidentiality and the number of arbitrators shall be only one.',
            'WhitePhoenix and You, agree to not participate in a class action or class-wide arbitration for any claims included in these Terms.',
            'WhitePhoenix and You, agree that Any dispute arising out of these Terms, or your use of our Service, shall be resolved by arbitration administered by the Cyprus Arbitration &amp; Mediation Centre (CAMC).'
          ]}
        />

        <Title subTitle={true} id={`${name} 10`}>
          10. Terms of Service Modifications
        </Title>

        <Paragrafs
          paragrafs={[
            'These terms may be subject to updates and modifications. WhitePhoenix is not going to notify you about the modifications of these Terms. By using our Services, you agree to the last updated version of these terms. Therefore, we strongly recommend you to regularly check our terms so you can spot any modifications and make sure you agree to be bound to them. If you do not agree with any modification to these terms, you should stop using our Services.'
          ]}
        />

        <Title subTitle={true} id={`${name} 10`}>
          Complaints
        </Title>

        <Paragrafs
          paragrafs={[
            'If you have any complaints, feedback or questions, kindly contact us at support@phoenixw.com and we will, in our best efforts try to resolve it for you'
          ]}
        />

      </article>
    </section>
  )
}

export default TermsOfService;