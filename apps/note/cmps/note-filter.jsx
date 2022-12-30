const { useState, useEffect } = React
const { useLocation, useNavigate } = ReactRouterDOM

import { noteService } from '../services/note.service.js'

export function NoteFilter({ onSetFilter }) {
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        onSetFilter(filterBy)
      }, [filterBy])

      useEffect(() => {
        const searchParams = new URLSearchParams()
        searchParams.set('text', filterBy.text)
        navigate(`${location.pathname + '?' + searchParams.toString()}`)
      }, [filterBy, navigate])

    function onSubmitFilter(ev) {
        console.log(filterBy)
        console.log(ev)
        onSetFilter(filterBy)
        return console.log('submit')
    }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        console.log('value', value)
        setFilterBy((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    return (
        <section className="note-filter filter">
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
                    className="fa-solid fa-magnifying-glass search-icon-note search-icon"
                ></label>
            </form>
        </section>
    )
}