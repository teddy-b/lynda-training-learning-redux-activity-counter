import React, { PropTypes } from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'

const SkiDayRow = ({ resort, date, powder, backcountry, onRemoveDay = f => f }) => (
  <tr onDoubleClick={() => onRemoveDay(date)}>
    <td>
      {date}
    </td>
    <td>
      {resort}
    </td>
    <td>
      {powder && <SnowFlake />}
    </td>
    <td>
      {backcountry && <Terrain />}
    </td>
  </tr>
)

SkiDayRow.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool,
  backcountry: PropTypes.bool,
  onRemoveDay: PropTypes.func
}

export default SkiDayRow
