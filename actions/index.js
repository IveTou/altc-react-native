import { assignIn, get, filter, unionBy, uniq } from 'lodash';
import { GET_REVIEWS_SUCCESS ,LIKE_REVIEW, GET_REVIEWS_ERROR, DISLIKE_REVIEW } from '../constants/action-types';
import { NYT_API, NYT_REVIEWS_ALL, NYT_ACCESS_TOKEN } from '../constants/apis';

export const getReviewsAll = () => {
  return dispatch => {
    return fetch(NYT_API + NYT_REVIEWS_ALL + 'api-key=' + NYT_ACCESS_TOKEN)
      .then(res => res.json())
      .then(json => {
        if(json.errors) {
          dispatch({ type: GET_REVIEWS_ERROR, err: get(json, 'errors') });
        } else {
          dispatch({ type: GET_REVIEWS_SUCCESS, reviews: get(json, 'results') });
        }
      });
  };
}

export const makeReviews = (likes, reviews) => unionBy(likes, reviews, 'display_title');

export const makeLikes = (like, likes, rate = true) => {
  const newLike = assignIn(like, { liked: rate });
  return rate ? 
    uniq(likes.concat(newLike)):
    filter(likes, ({ display_title }) => display_title !== newLike.display_title);
}

export const likeReview = like => {
  return (dispatch, getState) => {
    const { likes, reviews } = getState();
    const newLikes = makeLikes(like, likes, true);
    const newReviews =  makeReviews(newLikes, reviews);

    return dispatch({ type: LIKE_REVIEW, reviews: newReviews, likes: newLikes });
  }
};


export const dislikeReview = like => {
  return (dispatch, getState) => {
    const { likes, reviews } = getState();
    const newLikes = makeLikes(like, likes, false);
    const newReviews =  makeReviews(newLikes, reviews);
    
    return dispatch({ type: DISLIKE_REVIEW, reviews: newReviews, likes: newLikes });
  }
};