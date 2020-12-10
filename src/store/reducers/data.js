import * as actionTypes from '../actions/actionTypes';

const initialState = {
  leaderboard: [],
  user: '',
  questions: [],
  score: 0,
  category: ''
}

const addCategory = (state, action) => {
  return {
    ...state,
    questions: action.category
  };
}

const addToLeaderboard = (state, action) => {
  const remainingUsers = state.leaderboard.filter(user => user.user !== action.user);
  const newUsers = [
    ...remainingUsers,
    { user: action.user, score: action.score }
  ];
  const sortedLeaderboard = newUsers.sort((initial, final) => {
    let comparison = 0;
    if (initial.score > final.score) {
      comparison = -1;
    } else if (initial.score < final.score) {
      comparison = 1;
    }
    return comparison;
  });

  localStorage.setItem("leaderboard", JSON.stringify(state.leaderboard));
  localStorage.setItem("user", JSON.stringify(state.user));
  return {
    ...state,
    leaderboard: sortedLeaderboard
  };
}

const saveToStorage  = (state) => {
  console.log(state)
  localStorage.setItem("leaderboard", JSON.stringify(state.leaderboard));
  localStorage.setItem("user", JSON.stringify(state.user));
  return ;
}

const getFromStorage  = (state) => {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  const user = JSON.parse(localStorage.getItem("user")) || "";
  return {
    ...state,
    leaderboard,
    user
  };
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_LEADERBOARD:
      return addToLeaderboard(state, action);
    case actionTypes.CREATE_USER:
      return {
        ...state,
        user: action.user
      }
    case actionTypes.UPDATE_SCORE:
      return {
        ...state,
        score: action.score
      }
    case actionTypes.ADD_CATEGORY:
      return addCategory(state, action);
    case actionTypes.SAVE_TO_STORAGE:
      return saveToStorage(state);
    case actionTypes.GET_FROM_STORAGE:
      return getFromStorage(state);
    default:
      return state;
  }
}

export default reducer;