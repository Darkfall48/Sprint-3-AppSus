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

    function handleChange({target}){
        let {value} = target
        console.log('value', value)
        setNote((prevNote => {
            return { ...prevNote, info:{txt: value }}
        }))
    }

    return <div onSubmit={onSaveNote} className="edit-container">
        <form action="edit-note-form">
            <textarea type="text" className="edit-note-txt" value={noteToEdit.info.txt} onChange={handleChange} />
            <button className="btn btn-close-editor">Close</button>
        </form>

    </div>
}