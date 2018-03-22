import React from 'react'
import { connect } from 'react-redux'
import SkiDayList from '../ui/SkiDayList'
import { removeDay } from '../../actions'

const mapStateToProps = (state, props) => ({
  days: state.allSkiDays,
  filter: props.params.filter
})

const mapDispatchToProps = (dispatch) => ({
  onRemoveDay(date) {
    dispatch(removeDay(date))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList)
