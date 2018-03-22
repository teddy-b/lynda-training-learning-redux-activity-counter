import React, { PropTypes } from 'react'
import '../../stylesheets/Whoops404.scss'

const Whoops404 = ({ location }) => (
  <div className='whoops-404'>
    <h1>Whoops, route not found</h1>
    <p>Cannot find content for {location.pathname}</p>
  </div>
)

Whoops404.propTypes = {
  location: PropTypes.object
}

export default Whoops404
