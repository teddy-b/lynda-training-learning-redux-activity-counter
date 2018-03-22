import expect from 'expect'
import ACTIONS from '../constants'
import { fetching } from '../store/reducers'

const action = {
  type: ACTIONS.FETCH_RESORT_NAMES
}

const state = false
const expectedState = true
const actualState = fetching(state, action)

expect(actualState).toEqual(expectedState)

console.log('FETCH_RESORT_NAMES PASSED!!!')
