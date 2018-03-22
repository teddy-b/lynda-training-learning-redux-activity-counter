import expect from 'expect'
import ACTIONS from '../constants'
import { suggestions, fetching } from '../store/reducers'

const action = {
  type: ACTIONS.CHANGE_SUGGESTIONS,
  payload: ['Heavenly Ski Resort', 'Heavens Sonohara']
}

const state = {
	fetching: true,
	suggestions: []
}

const expectedState = {
	fetching: false,
	suggestions: ['Heavenly Ski Resort', 'Heavens Sonohara']
}

const actualState = {
	fetching: fetching(state.fetching, action),
	suggestions: suggestions(state.suggestions, action)
}

expect(actualState.suggestions).toEqual(expectedState.suggestions)
expect(actualState.fetching).toEqual(expectedState.fetching)

console.log('CHANGE_SUGGESTIONS PASSED!!!')
