
import './Reviews.css';

import ChangeReviews from '../ChangeReviews/ChangeReviews';

import star from './../../images/reviews/Star.svg';
import comas from './../../images/reviews/Comas.svg';

import { useState } from 'react';

function Reviews({ reviews = [] }) {

  const [leftReview, setLeftReview] = useState(reviews[0]);
  const [rightReview, setRightReview] = useState(reviews[1]);
  const [isOpening, setIsOpening] = useState(true);

  return (
    <article className='reviews'>
      <div className='reviews__list'>
        <div className={isOpening ? 'review review_opening' : 'review review_closeing'}>
          <div className='review__title-star'>
            <h3 className='review__title'>{leftReview.name}</h3>
            <div className='review__starts'>
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
            </div>
          </div>

          <h4 className='review__subtitle'>
            {leftReview.title}
          </h4>

          <p className='review__text'>
            {leftReview.message}
          </p>

          <div className='review__date-comas'>
            <p className='review__text review__date'>
              {leftReview.date}
            </p>
            <img
              alt=',,'
              src={comas}
            />
          </div>

        </div>

        <div className={isOpening ? 'review review_opening' : 'review review_closeing'}>
          <div className='review__title-star'>
            <h3 className='review__title'>{rightReview.name}</h3>
            <div className='review__starts'>
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
              <img
                className='review__start'
                src={star}
                alt={'star'}
              />
            </div>
          </div>

          <h4 className='review__subtitle'>
            {rightReview.title}
          </h4>

          <p className='review__text'>
            {rightReview.message}
          </p>

          <div className='review__date-comas'>
            <p className='review__text review__date'>
              {rightReview.date}
            </p>
            <img
              alt=',,'
              src={comas}
            />
          </div>

        </div>
      </div>


      <ChangeReviews
        setLeftReview={setLeftReview}
        leftReview={leftReview}
        setRightReview={setRightReview}
        rightReview={rightReview}
        reviews={reviews}
        isOpening={isOpening}
        setIsOpening={setIsOpening}
      />
    </article >
  )
}

export default Reviews;