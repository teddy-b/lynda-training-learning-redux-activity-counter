import { combineReducers } from 'redux'
import ACTIONS from '../constants'

export const goal = (state = 10, action) =>
  (action.type === ACTIONS.SET_GOAL)
    ? parseInt(action.payload)
    : state

export const skiDay = (state = null, action) =>
  (action.type === ACTIONS.ADD_DAY)
    ? action.payload
    : state

export const errors = (state = [], action) => {
  switch(action.type) {
    case ACTIONS.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
    case ACTIONS.CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload)
    default:
      return state
  }
}

export const allSkiDays = (state = [], action) => {
  switch(action.type) {
    case ACTIONS.ADD_DAY:
    const hasDay = state.some(skiDay => skiDay.date === action.payload.date)
      return (hasDay)
        ? state
        : [
          ...state,
          skiDay(null, action)
        ]
    case ACTIONS.REMOVE_DAY:
      return state.filter(skiDay => skiDay.date !== action.payload)
    default:
      return state
  }
}

export const fetching = (state = false, action) => {
  switch(action.type) {
    case ACTIONS.FETCH_RESORT_NAMES:
      return true
    case ACTIONS.CANCEL_FETCHING:
    case ACTIONS.CHANGE_SUGGESTIONS:
      return false
    default:
      return state
  }
}

export const suggestions = (state = [], action) => {
  switch(action.type) {
    case ACTIONS.CLEAR_SUGGESTIONS:
      return []
    case ACTIONS.CHANGE_SUGGESTIONS:
      return action.payload
    default:
      return state
  }
}

export const appReducer = combineReducers({
  allSkiDays,
  goal,
  errors,
  resortNames: combineReducers({
    fetching,
    suggestions
  })
})
