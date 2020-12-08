// https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  leaderboard: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_LEADERBOARD:
      return;
    case actionTypes.CREATE_USER:
      return;
    case actionTypes.GET_LEADERBOARD:
      return;
    case actionTypes.GET_QUESTIONS:
      return;
    default:
      return state;
  }
}

export default reducer;