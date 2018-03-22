import React from 'react'
import { connect } from 'react-redux'
import SkiDayCount from '../ui/SkiDayCount'

const mapStateToProps = (state) => ({
	total: state.allSkiDays.length,
	powder: state.allSkiDays.filter(day => day.powder).length,
	backcountry: state.allSkiDays.filter(day => day.backcountry).length
})

export default connect(mapStateToProps)(SkiDayCount)
