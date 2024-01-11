import React from 'react';
import { IReviewProps } from '../../types/review-type';

type ReviewsProps = {
  reviews: IReviewProps[];
};

type ReviewProps = {
  review: IReviewProps;
};

function Review({ review }: ReviewProps): JSX.Element {
  const getDateString = (postDate: Date) => `${postDate.toLocaleString('eng', { month: 'long', })} ${postDate.getDate()}, ${postDate.getFullYear()}`;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime={getDateString(new Date(review.date))}>
            {getDateString(new Date(review.date))}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

function MovieReviews({ reviews = [] }: ReviewsProps): JSX.Element {
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

const FilmReviewsMemo = React.memo(MovieReviews);

export default FilmReviewsMemo;
