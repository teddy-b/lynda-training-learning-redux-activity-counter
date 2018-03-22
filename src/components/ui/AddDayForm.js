import React, { PropTypes } from 'react'
import Autocomplete from './Autocomplete'
import '../../stylesheets/AddDayForm.scss'

const AddDayForm = ({ suggestions = [], onNewDay = f => f, onChange = f => f, onClear = f => f, fetching = false, router }) => {
  let _resort, _date, _powder, _backcountry

  const submit = (e) => {
    e.preventDefault()

    onNewDay({
      resort: _resort.value,
      date: _date.value.toString(),
      powder: _powder.checked,
      backcountry: _backcountry.checked
    })

    const addAnother = confirm(`${_resort.value} on ${_date.value.toString()} added. Add another?`)

    if (!addAnother) {
      router.push('/')
    }

    _resort.value = ''
    _date.value = ''
    _powder.checked = false
    _backcountry.checked = false
  }

  return (
    <form onSubmit={submit} className='add-day'>
      <label htmlFor='resort'>Resort Name</label>
      <Autocomplete ref={input => _resort = input}
                    suggestions={suggestions}
                    onChange={() => onChange(_resort.value)}
                    fetching={fetching}
                    onClear={onClear}
                    required
      />
      <label htmlFor='date'>Date</label>
      <input id='date' type='date' ref={input => _date = input} required />
      <div>
        <input id='powder-day' type='checkbox' ref={input => _powder = input} />
        <label htmlFor='powder-day'>Powder</label>
      </div>
      <div>
        <input id='backcountry-day' type='checkbox' ref={input => _backcountry = input} />
        <label htmlFor='backcountry-day'>Backcountry</label>
      </div>
      <button>Add Day</button>
    </form>
  )
}

AddDayForm.propTypes = {
  suggestions: PropTypes.array,
  onNewDay: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  fetching: PropTypes.bool,
  router: PropTypes.object
}

export default AddDayForm
