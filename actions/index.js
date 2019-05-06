import { assignIn, get, filter, unionBy, uniq } from 'lodash';
import { GET_REVIEWS_SUCCESS ,LIKE_REVIEW, GET_REVIEWS_ERROR, DISLIKE_REVIEW } from '../constants/action-types';
import { NYT_API, NYT_REVIEWS_ALL, NYT_ACCESS_TOKEN } from '../constants/apis';

export function getReviewsAll() {
  return function(dispatch) {
    return fetch(NYT_API + NYT_REVIEWS_ALL + 'api-key=' + NYT_ACCESS_TOKEN)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: GET_REVIEWS_SUCCESS, reviews: get(json, 'results') });
      }).catch(err => {
        dispatch({ type: GET_REVIEWS_ERROR, err });
      });
  };
}

export function likeReview(like) {
  return function(dispatch, getState ) {
    const { likes, reviews } = getState();
    const newLike = assignIn(like, { liked: true });
    const newLikes = uniq(likes.concat(newLike));
    const newReviews =  unionBy(newLikes, reviews, ['display_title', 'headline']);

    return dispatch({ type: LIKE_REVIEW, reviews: newReviews, likes: newLikes });
  }
};

export function dislikeReview(like) {
  return function(dispatch, getState ) {
    const { likes, reviews } = getState();
    const newLike = assignIn(like, { liked: false });
    const newLikes = filter(likes, ({ display_title, headline }) => (display_title !== newLike.display_title && headline !== newLike.headline));
    const newReviews =  unionBy(newLikes, reviews, ['display_title', 'headline']);
    
    return dispatch({ type: DISLIKE_REVIEW, reviews: newReviews, likes: newLikes });
  }
};