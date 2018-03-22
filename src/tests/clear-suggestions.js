import expect from 'expect'
import ACTIONS from '../constants'
import { suggestions } from '../store/reducers'

const action = {
  type: ACTIONS.CLEAR_SUGGESTIONS
}

const state = ['Heavenly Ski Resort', 'Heavens Sonohara']
const expectedState = []
const actualState = suggestions(state, action)

expect(actualState).toEqual(expectedState)

console.log('CLEAR_SUGGESTIONS PASSED!!!')
