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

    return <div>
        <AddNote onSaveNote={onSaveNote} />
        <NoteList notes={notes} />
        {/* <NoteTxt/> */}
    </div>

}
