import React, { PropTypes } from 'react'
import '../../stylesheets/GoalProgress.scss'

const GoalProgress = ({ current, goal = 10, onNewGoal = f => f }) => {
  const progress = Math.floor(current / goal * 100)
  let _input

  return (
    <div className='goal-progress'>
      <progress value={current} max={goal} />
      <span>{progress}%</span>
      <input type='number'
              ref={input => _input=input}
              defaultValue={goal}
              onChange={() => onNewGoal(_input.value)} />
      <span>days</span>
    </div>
  )
}

GoalProgress.propTypes = {
  current: PropTypes.number.isRequired,
  goal: PropTypes.number,
  onNewGoal: PropTypes.func
}

export default GoalProgress
