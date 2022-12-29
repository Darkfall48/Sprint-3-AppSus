const { useState } = React
import { noteService } from '../services/note.service.js'


export function AddNote({ onSaveNote }) {
    const [note, setNote] = useState(noteService.getDefaultNote())

    // function handleChange({ target }) {
    //     console.log('target', target)
    //     let { value, name: field, type } = target
    //     value = type === "range" ? +value : value
    //     setNote((prevNote => {
    //         return { ...prevNote, [field]: value }
    //     }))
    // }

    function handleChangeTxt({ target }) {
        // console.log('target', target)
        let { value } = target
        setNote((prevNote => {
            return { ...prevNote, info:{txt: value }}
        }))
    }

    function onSubmitNote(ev) {
        ev.preventDefault()
        onSaveNote(note)
        setNote(noteService.getDefaultNote())
    }
    return <div className="add-note-container">
        <form onSubmit={onSubmitNote}>
            <label htmlFor="note-txt"></label>
            <input type="text"
                id="note-txt"
                name="note-txt"
                placeholder="Write your note here..."
                value={note.info.txt}
                onChange={handleChangeTxt} />
            {/* <button>Submit</button> */}
        </form>
    </div>

}
