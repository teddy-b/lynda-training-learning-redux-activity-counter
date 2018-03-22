import React, { PropTypes } from 'react'
import Menu from '../ui/Menu'
import ShowErrors from '../containers/ShowErrors'
import GoalProgress from '../containers/GoalProgress'
import '../../stylesheets/App.scss'

export const App = ({ children }) => (
  <div className='app'>
    <ShowErrors />
    {children}
    <GoalProgress />
    <Menu />
  </div>
)

App.propTypes = {
  children: PropTypes.object
}

export default App
