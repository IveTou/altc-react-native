import { 
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR, 
  LIKE_REVIEW,
  DISLIKE_REVIEW
} from '../constants/action-types';

const initialState = {
  reviews: [],
  reviewsErr: null,
  likes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.reviews,
        reviewsErr: null
      }
    case GET_REVIEWS_ERROR:
      return {
        ...state,
        reviewsErr: action.err,
      }
    case LIKE_REVIEW:
      return {
        ...state,
        likes: action.likes,
        reviews: state.reviews,
        reviewsErr: null,
      }
    case DISLIKE_REVIEW:
      return {
        ...state,
        likes: action.likes,
        reviews: state.reviews,
        reviewsErr: null,
      }
    default:
      return state;
  }
};

export default rootReducer;