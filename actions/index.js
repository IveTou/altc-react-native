import { GET_SHOTS_SUCCESS ,LIKE_SHOT } from '../constants/action-types';

export function getShots() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_SHOTS_SUCCESS, shots: json });
      });
  };
}

export function likeShot(shots) {
  return { type: LIKE_SHOT, shots }
};