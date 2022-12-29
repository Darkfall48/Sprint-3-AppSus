// TODO: • Allow filtering
// TODO: • Start with Search and Read / Unread

const { useState, useEffect } = React
const { useLocation, useNavigate } = ReactRouterDOM

import { mailService } from '../services/mail.service.js'

export function MailFilter({ onSetFilter }) {
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const [selectedOption, setSelectedOption] = useState('')

  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  // console.log('Search Params:', searchParams)
  // console.log('Location:', location)
  // console.log('Navigate:', navigate)

  useEffect(() => {
    onSetFilter({ ...filterBy, readStatus: selectedOption })
  }, [filterBy, selectedOption])

  useEffect(() => {
    const readStatus = searchParams.get('readStatus') || ''
    const subject = searchParams.get('subject') || ''
    setFilterBy({ subject, readStatus })
    !readStatus ? setSelectedOption('all') : setSelectedOption(readStatus)
  }, [navigate])

  useEffect(() => {
    const searchParams = new URLSearchParams()
    searchParams.set('readStatus', selectedOption)
    searchParams.set('subject', filterBy.subject)
    navigate(`${location.pathname + '?' + searchParams.toString()}`)
  }, [filterBy, selectedOption, navigate])

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    setFilterBy((prevFilter) => {
      return { ...prevFilter, [field]: value }
    })
  }

  function handleSelectChange({ target }) {
    console.log(target)
    setSelectedOption(target.value)
    onSetFilter({ ...filterBy, readStatus: target.value })
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter({ ...filterBy, readStatus: selectedOption })
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
          value={filterBy.subject}
          onChange={handleChange}
        />
        <label
          htmlFor="text-filter"
          className="fa-solid fa-magnifying-glass search-icon"
        ></label>
      </form>
    </section>
  )
}
