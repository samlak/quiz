import * as actionTypes from './actionTypes';

export const addCategory = (category) => {
  return {
    type: actionTypes.ADD_CATEGORY,
    category
  }
}

export const createUser = (user) => {
  return {
    type: actionTypes.CREATE_USER,
    user
  }
}

export const updateScore = (score) => {
  return {
    type: actionTypes.UPDATE_SCORE,
    score
  }
}

export const addToLeaderboard = (user, score) => {
  return {
    type: actionTypes.ADD_TO_LEADERBOARD,
    user, score
  }
}

export const saveToStorage  = () => {
  return {
    type: actionTypes.SAVE_TO_STORAGE
  }
}

export const getFromStorage  = () => {
  return {
    type: actionTypes.GET_FROM_STORAGE
  }
}