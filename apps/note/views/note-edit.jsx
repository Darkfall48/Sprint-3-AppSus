const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

export function NoteEdit() {
    const [noteToEdit, setNoteToEdit] = useState(noteService.getDefaultNote())
    const navigate = useNavigate()
    let { noteId } = useParams()
    noteId= noteId.substring(1)
    console.log('noteId', noteId)


    useEffect(() => {
        if (!noteId) return
        loadNote()
    }, [])

    function loadNote() {
        noteService.get(noteId)
            .then((note) => setNoteToEdit(note))
            // .catch((err) => {
            //     console.log('Had issues in note details', err)
            //     navigate('/note')
            // })
    }

    function onSaveNote(ev) {
        navigate('/note')
    }

    function onEditNote(ev){
        console.log(ev)
    }
    return <div onSubmit={onSaveNote} className="edit-container">
        <h3>Edit your note</h3>
        <form action="edit-note-form">
            <textarea type="text" className="edit-note-txt" value={`${noteToEdit.info.txt}`} onchange={onEditNote} />
            <button className="btn btn-close-editor">Close</button>
        </form>

    </div>
}