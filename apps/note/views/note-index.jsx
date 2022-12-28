const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { AddNote } from '../cmps/add-note.jsx'

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    // const [filterBy , setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query()
            .then(notes => setNotes((prevNotes)=>prevNotes=notes))
    }

    function onSaveNote(noteToAdd) {
        noteService.save(noteToAdd).then(()=>loadNotes())
    }

    function onRemoveNote(noteId){
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
            // showSuccessMsg('Book removed')
        })
        .catch((err) =>{
            console.log('error', err)
            // showErrorMsg('Could not remove note')
        })
    }

    function onPinNote(noteId){

    }

    function onEditBackground(noteId){

    }

    return <div className="note-index-container">
        <AddNote onSaveNote={onSaveNote} />
        <NoteList notes={notes} 
        onRemoveNote={onRemoveNote} 
        onPinNote={onPinNote}
        />
        {/* <NoteTxt/> */}
    </div>

}
