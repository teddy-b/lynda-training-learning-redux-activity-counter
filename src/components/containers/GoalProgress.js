import React from 'react'
import { connect } from 'react-redux'
import GoalProgress from '../ui/GoalProgress'
import { setGoal } from '../../actions'

const mapStateToProps = (state) => ({
  current: state.allSkiDays.length,
  goal: state.goal
})

const mapDispatchToProps = (dispatch) => ({
  onNewGoal(goal) {
    dispatch(setGoal(goal))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalProgress)
