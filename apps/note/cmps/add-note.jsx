const { useState } = React
import { noteService } from '../services/note.service.js'


export function AddNote({ onSaveNote }) {
    const [note, setNote] = useState(noteService.getDefaultNote())

    function handleChange({ target }) {
        console.log('target', target)
        let { value, name: field, type } = target
        value = type === "range" ? +value : value
        setNote((prevNote => {
            return { ...prevNote, [field]: value }
        }))
    }

    function onSubmitNote(ev) {
        ev.preventDefault()
        onSaveNote(note)
    }
    return <div className="add-note-container">
        <form onSubmit={onSubmitNote}>
            <label htmlFor="note-txt">Add Note:</label>
            <input type="text"
                id="note-txt"
                name="note-txt"
                placeholder="Write your note here..."
                value={note.txt}
                onChange={handleChange} />

            <button>Submit</button>
        </form>
    </div>

}
