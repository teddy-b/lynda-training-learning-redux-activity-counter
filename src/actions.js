import fetch from 'isomorphic-fetch'
import ACTIONS from './constants'

export const addDay = (resort, date, powder = false, backcountry = false) => ({
  type: ACTIONS.ADD_DAY,
  payload: { resort, date, powder, backcountry }
})

export const removeDay = (date) => ({
  type: ACTIONS.REMOVE_DAY,
  payload: date
})

export const setGoal = (goal) => ({
  type: ACTIONS.SET_GOAL,
  payload: goal
})

export const addError = (errorMessage) => ({
  type: ACTIONS.ADD_ERROR,
  payload: errorMessage
})

export const clearError = (errorIndex) => ({
  type: ACTIONS.CLEAR_ERROR,
  payload: errorIndex
})

export const fetchResortNames = () => ({
  type: ACTIONS.FETCH_RESORT_NAMES
})

export const cancelFetching = () => ({
  type: ACTIONS.CANCEL_FETCHING
})

export const changeSuggestions = (suggestions) => ({
  type: ACTIONS.CHANGE_SUGGESTIONS,
  payload: suggestions
})

export const clearSuggestions = () => ({
  type: ACTIONS.CLEAR_SUGGESTIONS
})

export const suggestResortNames = value => dispatch => {
  dispatch(fetchResortNames())
  
	fetch(`http://localhost:3333/resorts/${value}`)
		.then(response => response.json())
		.then(suggestions => dispatch(changeSuggestions(suggestions)))
		.catch(error => {
			dispatch(addError(error.message))
			dispatch(cancelFetching())
		})
}
