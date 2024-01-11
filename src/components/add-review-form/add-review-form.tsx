import React, { ChangeEvent, FormEvent, Fragment, useState, useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MAX_REVIEW, MIN_REVIEW, RATINGS } from '../../const/review';
import { useAppDispatch } from '../../hook/store';
import { addCommentAction } from '../../store/api-actions';
import { AppRoute } from '../../enums/app-route';
import FORM_VALUE from '../../const/form-value';

type ReviewFormProps = {
	filmId: string;
};

function AddReviewForm({ filmId }: ReviewFormProps): React.JSX.Element {
  const navigate = useNavigate();
  const [review, setReview] = useState({
    ...FORM_VALUE,
  });

  const [serverError, setServerError] = useState('');

  const dispatch = useAppDispatch();

  const isSubmitButtonDisabled =
    !review.rating ||
    !review.comment ||
    review.comment.length < MIN_REVIEW ||
    review.comment.length > MAX_REVIEW;

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

      setServerError('');

      dispatch(
        addCommentAction({
          filmId: filmId,
          comment: review.comment,
          rating: review.rating,
        })
      )
        .then(() => {
          navigate(`/films/${filmId}`);
        })
        .catch(() => {
          setServerError('Ошибка сервера');
        });
    },
    [dispatch, filmId, navigate, review]
  );

  if (!filmId) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {RATINGS.map((rating) => (
              <Fragment key={rating}>
                <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating.toString()} checked={review.rating === rating} onChange={handleRatingChange}/>
                <label className="rating__label" htmlFor={`star-${rating}`}>
                  Rating {rating}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={review.comment} onChange={handleTextAreaChange}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isSubmitButtonDisabled}>
              Post
            </button>
          </div>
        </div>
        {serverError && (
          <div className="add-review__field--error">
            <p>{serverError}</p>
          </div>
        )}
      </form>
    </div>
  );
}

const AddReviewFormMemo = React.memo(AddReviewForm);

export default AddReviewFormMemo;
