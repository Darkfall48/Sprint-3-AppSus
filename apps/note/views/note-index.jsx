const { useState, useEffect } = React
const { Link, useNavigate } = ReactRouterDOM

import { noteService } from '../services/note.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { AddNote } from '../cmps/add-note.jsx'
import { NoteEdit } from '../views/note-edit.jsx'
import { Loader } from '../../../cmps/loader.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState(null)
  const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
  const [noteToEdit, setNoteToEdit] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [noteType, setNoteType] = useState('note-txt')

  const navigate = useNavigate()

  // const [filterBy , setFilterBy] = useState(noteService.getDefaultFilter())

  useEffect(() => {
    loadNotes()
  }, [filterBy])

  function loadNotes() {
    noteService
      .query(filterBy)
      // .then(notes => setNotes((prevNotes) => prevNotes = notes))
      .then(setNotes)
  }

  function onSaveNote(noteToAdd) {
    noteService.save(noteToAdd).then(() => {
      showSuccessMsg('Note added')
      loadNotes()
    })
  }

  function onRemoveNote(noteId) {
    noteService
      .remove(noteId)
      .then(() => {
        noteService.query()
      })
      .then(() => {
        const updatedNotes = notes.filter((note) => note.id !== noteId)
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
    noteService
      .pinNote(noteToPin)
      .then(noteService.query)
      .then((notes) => {
        let pinnedNotes = notes.filter((note) => note.isPinned === true)
        const unPinnedNotes = notes.filter((note) => note.isPinned === false)
        const updatedNotes = pinnedNotes.concat(unPinnedNotes)
        return updatedNotes
      })
      .then((updatedNotes) => {
        setNotes(updatedNotes)
      })
  }

  function onChangeBackgroundColor(selectedNote, chosenColor) {
    noteService
      .changeNoteBackground(chosenColor, selectedNote)
      .then(() => noteService.query())
      .then((updatedNotes) => {
        setNotes((prevNotes) => (prevNotes = updatedNotes))
      })
  }

  function onEditNote(note) {
    const noteTxt = note.info.txt
    setNoteToEdit(note)
    setEditMode(true)
  }

  function onSetFilter(filterByFromFilter) {
    setFilterBy(filterByFromFilter)
  }

  function onSaveEditedNote(noteToEdit) {
    setEditMode(false)
    noteService
      .save(noteToEdit)
      .then(noteService.query)
      .then((updatedNotes) => {
        setNotes(updatedNotes)
      })
  }

  function onSetNoteType(selectedNoteType) {
    console.log('selectedNoteType', selectedNoteType)
    setNoteType(selectedNoteType)
  }

  if (!notes) return <Loader />

  return (
    <div className="note-index-container">
      <AddNote onSaveNote={onSaveNote} onSetNoteType={onSetNoteType} />
      <NoteFilter onSetFilter={onSetFilter} />
      <NoteList
        notes={notes}
        onRemoveNote={onRemoveNote}
        onChangeBackgroundColor={onChangeBackgroundColor}
        onPinNote={onPinNote}
        onEditNote={onEditNote}
        noteType={noteType}
      />
      {editMode && (
        <NoteEdit noteToEdit={noteToEdit} onSaveEditedNote={onSaveEditedNote} />
      )}

      {/* <NoteTxt/> */}
    </div>
  )
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
