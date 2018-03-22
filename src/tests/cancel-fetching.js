import expect from 'expect'
import ACTIONS from '../constants'
import { fetching } from '../store/reducers'

const action = {
  type: ACTIONS.CANCEL_FETCHING
}

const state = true
const expectedState = false
const actualState = fetching(state, action)

expect(actualState).toEqual(expectedState)

console.log('CANCEL_FETCHING PASSED!!!')
