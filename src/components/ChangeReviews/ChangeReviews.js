
//? стили
import './ChangeReviews.css';

function ChangeReviews({ reviews = [], setLeftReview, leftReview, setRightReview, rightReview, isOpening, setIsOpening }) {

  return (
    <article className='changeReviews'>
      {reviews.map((item, index) => {

        function onClick() {
          setLeftReview(item);
          if (index === reviews.length - 1) {
            setRightReview(reviews[0]);
          } else {
            setRightReview(reviews[index + 1]);
          }
          setIsOpening(!isOpening);
        }

        return (
          <button
            onClick={onClick}
            type='button'
            key={index}
            className={(item === leftReview) || (item === rightReview) ? 'changeReviews__button_active changeReviews__button button' : 'changeReviews__button button'}
          />
        )
      })
      }
    </article >
  )
}

export default ChangeReviews;