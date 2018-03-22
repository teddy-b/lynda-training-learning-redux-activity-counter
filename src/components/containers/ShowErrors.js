import React from 'react'
import { connect } from 'react-redux'
import ShowErrors from '../ui/ShowErrors'
import { clearError } from '../../actions'

const mapStateToProps = (state) => ({
	errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
	onClearError(index) {
		dispatch(clearError(index))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors)
