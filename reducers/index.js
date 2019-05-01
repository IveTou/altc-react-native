import { 
  GET_SHOTS_SUCCESS,
  GET_SHOTS_ERROR, 
  LIKE_SHOT
} from '../constants/action-types';

const initialState = {
  shots: [],
  shotsErr: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOTS_SUCCESS:
      return {
        ...state,
        shots: action.shots,
        shotsErr: null
      }
    case GET_SHOTS_ERROR:
      return {
        ...state,
        shotsErr: action.err,
      }
    case LIKE_SHOT:
      return {
        ...state,
        shots: action.shots,
        shotsErr: null,
      }
    default:
      return state;
  }
};

export default rootReducer;