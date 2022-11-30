
import imageComplete from './../images/icons/complete.svg';
import imageWaiting from './../images/icons/waiting.svg';
import imageError from './../images/icons/error.svg';


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
