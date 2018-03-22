import React, { Component, PropTypes } from 'react'
import Downloading from 'react-icons/lib/fa/cloud-download'

class Autocomplete extends Component {
  get value() {
    return this.refs.searchTerm.value
  }

  set value(newValue) {
    this.refs.searchTerm.value = newValue
  }

  render() {
    const { suggestions = [], onChange = f => f, onClear = f => f, fetching = false } = this.props

    return (
      <div className='autocomplete'>
        <input id='resort'
                ref='searchTerm'
                type='text'
                placeholder='mountain or resort...'
                onChange={onChange}
                onFocus={onChange}
                onBlur={() => setTimeout(onClear, 250)}
        />
        <span>{fetching && <Downloading />}</span>
        <div className='suggestions'>
          {suggestions.map((item, i) =>
            <p key={i} onClick={() => {
              this.refs.searchTerm.value = item
              onClear()
            }}>{item}</p>
          )}
        </div>
      </div>
    )
  }
}

Autocomplete.propTypes = {
  suggestions: PropTypes.array,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  fetching: PropTypes.bool
}

export default Autocomplete
