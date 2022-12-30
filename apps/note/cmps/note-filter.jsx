const { useState, useEffect } = React
const { useLocation, useNavigate } = ReactRouterDOM

import { noteService } from '../services/note.service.js'

export function NoteFilter({ onSetFilter }) {
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    function onSubmitFilter() {
        return console.log('submit')
    }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        // value = type === 'number' ? +value : value
        setFilterBy((prevFilter) => {
          return { ...prevFilter, [field]: value }
        })
      }

    function handleSelectChange({ target }) {
        console.log(target)
        // setSelectedOption(target.value)
        // onSetFilter({ ...filterBy, readStatus: target.value })
      }

    return (
        <section className="note-filter filter">
            {/* <select
            name="note-type"
            id="note-type"
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option value="all">All</option>
            <option value="text">Text</option>
            <option value="image">Image</option>
          </select> */}
            <form onSubmit={onSubmitFilter}>
                <input
                    type="text"
                    id="text-filter"
                    name="text"
                    placeholder="Search by text"
                    value={filterBy.text}
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