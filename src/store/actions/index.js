import * as actionTypes from './actionTypes';

export const getQuestions = () => {
  return {
    type: actionTypes.GET_QUESTIONS
  }
}

export const createUser = () => {
  return {
    type: actionTypes.CREATE_USER
  }
}

export const getLeaderboard = () => {
  return {
    type: actionTypes.GET_LEADERBOARD
  }
}

export const addToLeaderboard = () => {
  return {
    type: actionTypes.ADD_TO_LEADERBOARD
  }
}