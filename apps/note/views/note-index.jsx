const { useState, useEffect } = React
const { Link, useNavigate } = ReactRouterDOM

import { noteService } from '../services/note.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { AddNote } from '../cmps/add-note.jsx'
import { NoteEdit } from "../views/note-edit.jsx";
import { Loader } from '../../../cmps/loader.jsx'


export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [noteToEdit, setNoteToEdit] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const navigate = useNavigate()

    // const [filterBy , setFilterBy] = useState(noteService.getDefaultFilter())


    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query()
            // .then(notes => setNotes((prevNotes) => prevNotes = notes))
            .then(setNotes)
    }

    function onSaveNote(noteToAdd) {
        noteService.save(noteToAdd).then(() => {
            showSuccessMsg('Note added')
            loadNotes()})
    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId)
            .then(() => { noteService.query() })
            .then(() => {
                const updatedNotes = notes.filter(note => note.id !== noteId)
                setNotes(updatedNotes)
                showSuccessMsg('Note removed')
            })
            // .then(notes => setNotes((prevNotes) => prevNotes = notes))
            .catch((err) => {
                console.log('error', err)
                // showErrorMsg('Could not remove note')
            })
    }

    function onPinNote(noteToPin) {
        noteService.pinNote(noteToPin)
        .then(noteService.query)
        .then((notes)=>{
            let pinnedNotes = notes.filter(note => note.isPinned === true)
            const unPinnedNotes = notes.filter(note => note.isPinned === false)
            const updatedNotes = pinnedNotes.concat(unPinnedNotes)
            return updatedNotes
        })
        .then((updatedNotes) => {setNotes(updatedNotes)
            // showSuccessMsg('Book removed')
        })
    }
    
    function onChangeBackgroundColor(selectedNote, chosenColor) {
        noteService.changeNoteBackground(chosenColor, selectedNote)
        .then(()=>noteService.query()).then((updatedNotes)=>{setNotes((prevNotes)=>prevNotes=updatedNotes)})
    }

    function onEditNote(note){
        const noteTxt = note.info.txt
        console.log('noteTxt', noteTxt)
        // setEditMode(true)
        console.log('note.id', note.id)
        navigate(`/note/edit/:${note.id}`)
        // loadNotes()
    }

    if (!notes) return <Loader />


    return <div className="note-index-container">
        <AddNote onSaveNote={onSaveNote} />
        <NoteList notes={notes}
            onRemoveNote={onRemoveNote}
            onChangeBackgroundColor={onChangeBackgroundColor}
            onPinNote={onPinNote}
            onEditNote={onEditNote}
        />
        {/* {editMode && <NoteEdit/>} */}
        {/* {editMode && <Link to={`/note/edit/${noteToEdit.id}`}/> } */}

        {/* <NoteTxt/> */}
    </div>

}


//pin note trys
        // .then(() => { noteService.query() })
        // .then(() => {
        //     notes = notes.filter(note => note.isPinned === true)
        //     const unPinnedNotes = notes.filter(note => note.isPinned === false)
        //     notes.push(unPinnedNotes)
        //     console.log(notes)
        //     setNotes(notes)
        // })
    // .then(updatedNotes => setNotes((prevNotes) => prevNotes = updatedNotes))
    
    // showSuccessMsg('Book removed')
    // .then(console.log)
    // .then(()=>{noteService.query()})
    // .then(setNotes)
    //     .catch((err) => {
    //         console.log('error', err)
    //         // showErrorMsg('Could not remove note')
    //     })