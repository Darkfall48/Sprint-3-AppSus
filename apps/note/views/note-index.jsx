const { useState, useEffect } = React
const {Link} = ReactRouterDOM

import {NoteList} from '../cmps/note-list.jsx'
import {noteService} from '../services/note.service.js'

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    // const [filterBy , setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes(){
        noteService.query()
        .then(notes => setNotes(notes))
    }

    return <div> 
        {/* <AddNote onAddNote={onAddNote}/> */}
        <NoteList notes={notes}/>
        {/* <NoteTxt/> */}
    </div>

}
