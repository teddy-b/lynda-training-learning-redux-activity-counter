import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import AddDayForm from '../ui/AddDayForm'
import { addDay, suggestResortNames, clearSuggestions } from '../../actions'

const mapStateToProps = (state, props) => ({
  suggestions: state.resortNames.suggestions,
  fetching: state.resortNames.fetching,
  router: props.router
})

const mapDispatchToProps = (dispatch) => ({
  onNewDay({ resort, date, powder, backcountry }) {
    dispatch(addDay(resort, date, powder, backcountry))
  },
  onChange(suggestions) {
    suggestions
      ? dispatch(suggestResortNames(suggestions))
      : dispatch(clearSuggestions())
  },
  onClear() {
    dispatch(clearSuggestions())
  }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

export default withRouter(Container)
