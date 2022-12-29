// TODO: • Allow filtering
// TODO: • Start with Search and Read / Unread

const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'

export function MailFilter({ onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(
    mailService.getDefaultFilter()
  )
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    onSetFilter({ ...filterByToEdit, readStatus: selectedOption })
  }, [filterByToEdit, selectedOption])

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    setFilterByToEdit((prevFilter) => {
      return { ...prevFilter, [field]: value }
    })
  }

  function handleSelectChange({ target }) {
    console.log(target)
    setSelectedOption(target.value)
    onSetFilter({ ...filterByToEdit, readStatus: target.value })
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter({ ...filterByToEdit, readStatus: selectedOption })
  }

  return (
    <section className="mail-filter">
      <select
        name="read-status"
        id="read-status"
        onChange={handleSelectChange}
        value={selectedOption}
      >
        <option value="all">All</option>
        <option value="unread">Unread</option>
        <option value="read">Read</option>
      </select>
      <form onSubmit={onSubmitFilter}>
        <input
          type="text"
          id="subject-filter"
          name="subject"
          placeholder="Search By Subject"
          value={filterByToEdit.subject}
          onChange={handleChange}
        />
        <label htmlFor="text-filter" className="search-icon">
          Search
        </label>
      </form>
    </section>
  )
}
