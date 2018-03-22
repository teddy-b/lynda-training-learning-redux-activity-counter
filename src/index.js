import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import sampleData from './initialState'
import storeFactory from './store'
import { addError } from './actions'
import './stylesheets/index.scss'

const initialState = localStorage.getItem('redux-storage')
  ? JSON.parse(localStorage.getItem('redux-storage'))
  : sampleData

const saveState = () => {
  const state = JSON.stringify(store.getState())
  localStorage.setItem('redux-storage', state)
}

const handleError = (error) => {
	store.dispatch(addError(error.message))
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.addEventListener('error', handleError)

render(
	<Provider store={store}>
		{routes}
	</Provider>,
  document.getElementById('react-container')
)
