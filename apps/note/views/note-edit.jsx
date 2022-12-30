const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { Pin } from '../cmps/pin.jsx'

export function NoteEdit({ noteToEdit, onSaveEditedNote, onPinNote }) {
    const [noteInEditing, setNoteInEditing] = useState(noteService.getDefaultNote())
    // const navigate = useNavigate()
    // let { noteId } = useParams()
    let noteId = noteToEdit.id
    // noteId = noteId.substring(1)
    // console.log('noteId', noteId)


    useEffect(() => {
        if (!noteId) return
        loadNote()
    }, [])

    function loadNote() {
        setNoteInEditing(noteToEdit)
        // noteService.get(noteId)
        //     .then((noteToEdit) => setNoteToEdit(noteToEdit))
        // .catch((err) => {
        //     console.log('Had issues in note details', err)
        //     navigate('/note')
        // })
    }

    function saveNote(ev) {
        console.log('noteToEdit', noteInEditing)
        ev.preventDefault()
        onSaveEditedNote(noteInEditing)

        // .then(() => {
        //     showSuccessMsg('Note added')
        //     loadNotes()})
        // navigate('/note')
    }

    function handleChange(ev) {
        ev.preventDefault()
        let { value } = ev.target
        console.log('value', value)
        console.log('noteInEditing', noteInEditing)
        setNoteInEditing((prevNote) => {
            return ({ ...prevNote, info: { txt: value } })
        })
        console.log('noteInEditing', noteInEditing)
    }

    return <div onSubmit={saveNote} className="edit-container">
        <Pin note={noteInEditing} onPinNote={onPinNote} />
        <form action="edit-note-form">
            <textarea type="text" className="edit-note-txt" value={noteInEditing.info.txt} onChange={handleChange} />
            <button className="btn btn-close-editor">Close</button>
        </form>

    </div>
}