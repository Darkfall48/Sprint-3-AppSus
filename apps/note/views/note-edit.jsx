const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

export function NoteEdit() {
    const [noteToEdit, setNoteToEdit] = useState(noteService.getDefaultNote())
    const navigate = useNavigate()
    let { noteId } = useParams()
    noteId= noteId.substring(1)
    // console.log('noteId', noteId)


    useEffect(() => {
        if (!noteId) return
        loadNote()
    }, [])

    function loadNote() {
        noteService.get(noteId)
            .then((note) => setNoteToEdit(noteToEdit))
            // .catch((err) => {
            //     console.log('Had issues in note details', err)
            //     navigate('/note')
            // })
    }

    function onSaveNote(ev) {
        // noteService.save(noteToAdd)
        // .then(() => {
        //     showSuccessMsg('Note added')
        //     loadNotes()})
        navigate('/note')
    }

    function handleChange(ev){
        ev.preventDefault()
        let {value} = ev.target
        console.log('value', value)
        console.log('noteToEdit', noteToEdit)
        setNoteToEdit((prevNote) =>( {...prevNote, info:{txt: value} } ))
    }

    return <div onSubmit={onSaveNote} className="edit-container">
        <form action="edit-note-form">
            <textarea type="text" className="edit-note-txt" value={noteToEdit.info.txt} onChange={handleChange} />
            <button className="btn btn-close-editor">Close</button>
        </form>

    </div>
}