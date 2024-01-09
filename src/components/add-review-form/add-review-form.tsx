import React from 'react';
import { ChangeEvent, FormEvent, Fragment, useState, useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hook/store';
import { addCommentAction } from '../../store/api-actions';
import { AppRoute } from '../../enums/AppRoute';
import FORM_VALUE from '../../const/form-value';

type ReviewFormProps = {
	movieId: string;
};

function AddReviewForm({ movieId }: ReviewFormProps): React.JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const RATINGS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [review, setReview] = useState({
    ...FORM_VALUE,
  });

  const handleRatingChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setReview((currentReview) => ({
        ...currentReview,
        rating: Number(evt.target.value),
      }));
    },
    []
  );

  const handleTextAreaChange = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>) => {
      setReview((currentReview) => ({
        ...currentReview,
        comment: evt.target.value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      dispatch(
        addCommentAction({
          movieId: movieId,
          comment: review.comment,
          rating: review.rating,
        })
      ).then(() => {
        navigate(`/films/${movieId}`);
      });
    },
    [dispatch, movieId, navigate, review]
  );

  if (!movieId) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {RATINGS.map((rating) => (
              <Fragment key={rating}>
                <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating.toString()} checked={review.rating === rating} onChange={handleRatingChange} />
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={review.comment} onChange={handleTextAreaChange} />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

const AddReviewFormMemo = React.memo(AddReviewForm);

export default AddReviewFormMemo;
