const { Link } = ReactRouterDOM
const { useState, useEffect, useRef } = React

import { NotePreview } from './note-preview.jsx'
import { NoteControls } from './note-controls.jsx'
import { BgColorSelection } from './bg-color-select.jsx'
import { Loader } from '../../../cmps/loader.jsx'
import { Pin } from './pin.jsx'

export function NoteList({
  notes,
  onRemoveNote,
  onPinNote,
  onEditNote,
  onChangeBackgroundColor,
  noteType,
}) {
  const [hidden, setHidden] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [noteIdHovering, setNoteIdHovering] = useState(null)
  const [noteIdToSetBg, setNoteIdToSetBg] = useState(null)
  const [pinnedNote, setPinnedNote] = useState(null)
  // const pinned = (note.isPinned)? 'note-pinned':''
  // const [color, setColor] = useState('default')
  // useEffect(()=>{

  // },[editMode])

  function onEditBackground(noteId) {
    setHidden(!hidden)
    setNoteIdToSetBg(noteId)
  }

  function handleMouseOver({ target }) {
    setNoteIdHovering(target.id)
    setIsHovering(true)
  }
  function handleMouseOut() {
    setIsHovering(false)
  }

  if (!notes) return <Loader />

  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li
          key={note.id}
          id={note.id}
          className={note.bgColor}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Pin note={note} onPinNote={onPinNote} />
          <label htmlFor={`edit-btn-${note.id}`}>
            <NotePreview
              note={note}
              txt={note.info.txt}
              noteType={noteType}
              length={100}
            />
          </label>
          {/* {isHovering && (noteIdHovering===note.id) &&  */}
          <NoteControls
            note={note}
            noteId={note.id}
            onRamoveNote={onRemoveNote}
            // onPinNote={onPinNote}
            onEditBackground={onEditBackground}
            onEditNote={onEditNote}
          />
          {/* } */}
          {!hidden && noteIdToSetBg === note.id && (
            <BgColorSelection
              note={note}
              onEditBackground={onEditBackground}
              onChangeBackgroundColor={onChangeBackgroundColor}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

// function onChangeBackgroundColor(chosenColor) {
//     console.log('color', chosenColor)
//     setColor(chosenColor)
//     // setHidden(true)
// }
