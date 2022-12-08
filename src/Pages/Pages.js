
//! Footer
//* About us
import HowItWorks from './Footer/HowItWoks.js';

//* Policies
import Policies from './Footer/Policies/Policies.js';
import TermsOfService from './Footer/TermsOfService.js';
import PrivacyPolicy from './Footer/PrivacyPolicy.js';
import CoockiePolicy from './Footer/CoockiePolicy.js';
import AMLPolicy from './Footer/AMLPolicy.js';

//! Main
//? main
import Home from './Main/Home/Home.js';
import ExchangeBuy from './Main/ExchangeBuy/ExchangeBuy.js';
import Support from './Main/Support/Support.js';
import Profile from './Main/Profile/Profile.js';

//? sign in/up, mail verefecation
import Login from './Main/Login/Login.js';
import Register from './Main/Register/Register.js';
import MailVerification from './Main/MailVerification/MailVerification.js';

//? info pages
import PageInDevelopment from './Info/PageInDevelopment';
import PageNotFound from './Info/PageNotFound';
import YouAreNotLoggedIn from './Info/YouAreNotLoggedIn.js';


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
