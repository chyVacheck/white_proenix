
//! Footer
//* About us
import HowItWorks from './Footer/HowItWoks.jsx';

//* Policies
import Policies from './Footer/Policies/Policies.jsx';
import TermsOfService from './Footer/TermsOfService.jsx';
import PrivacyPolicy from './Footer/PrivacyPolicy.jsx';
import CoockiePolicy from './Footer/CoockiePolicy.jsx';
import AMLPolicy from './Footer/AMLPolicy.jsx';

//! Main
//? main
import Home from './Main/Home/Home.jsx';
import ExchangeBuy from './Main/ExchangeBuy/ExchangeBuy.js';
import Support from './Main/Support/Support.jsx';
import Profile from './Main/Profile/Profile.jsx';

//? sign in/up, mail verefecation
import Login from './Main/Login/Login.jsx';
import Register from './Main/Register/Register.jsx';
import MailVerification from './Main/MailVerification/MailVerification.jsx';

//? info pages
import PageInDevelopment from './Info/PageInDevelopment.jsx';
import PageNotFound from './Info/PageNotFound.jsx';
import YouAreNotLoggedIn from './Info/YouAreNotLoggedIn.jsx';


//! export
//? footer
//* About us
export { HowItWorks };
//* Policies
export { Policies, TermsOfService, PrivacyPolicy, CoockiePolicy, AMLPolicy };
//? main
export { Home, ExchangeBuy, Support, Profile };
//* sign in/up, mail verefecation
export { Login, Register, MailVerification };
//* info pages
export { PageInDevelopment, PageNotFound, YouAreNotLoggedIn };
