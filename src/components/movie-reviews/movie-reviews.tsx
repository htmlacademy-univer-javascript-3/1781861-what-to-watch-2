import { reviewDetails } from '../../mocks/reviews';
import { IReviewProps } from '../../types/review-type';

type ReviewsProps = {
	reviews: IReviewProps[];
};

type ReviewProps = {
	review: IReviewProps;
};

function Review({ review }: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime="Дата отзыва">
            {review.date.toString()}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default function MovieReviews({ reviews = reviewDetails }: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2, reviews.length).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
