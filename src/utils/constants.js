
import imageComplete from './../images/icons/complete.svg';
import imageWaiting from './../images/icons/waiting.svg';
import imageError from './../images/icons/error.svg';

//? Pages
import TermsOfService from './../Pages/TermsOfService.js';
import PrivacyPolicy from './../Pages/PrivacyPolicy.js';
import CoockiePolicy from '../Pages/CoockiePolicy';
import AMLPolicy from '../Pages/AMLPolicy.js';

const images = {
  icon: {
    complete: imageComplete,
    waiting: imageWaiting,
    error: imageError,
  },
  alt: {
    complete: 'Complete',
    waiting: 'Waiting',
    error: 'Error',
  }
}

export const popupInfoContent = {
  images: images,
  message: {
    complete: 'Complete',
    waiting: 'Waiting',
    error: 'Error',
  }
}

const Pages = {
  '/About_us/How_it_works': '',
  '/About_us/Fees': '',



  '/Policies/Terms_of_Service': <TermsOfService />,
  '/Policies/Privacy_Policy': <PrivacyPolicy />,
  '/Policies/Coockie_Policy': <CoockiePolicy />,
  '/Policies/AML_Policy': <AMLPolicy />,



}

export default Pages;