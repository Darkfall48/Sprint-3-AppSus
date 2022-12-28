const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { NotePreview } from "./note-preview.jsx";
import { NoteControls } from "./note-controls.jsx";
import { BgColorSelection } from "./bg-color-select.jsx";

export function NoteList({ notes, onRemoveNote, onPinNote, onEditNote }) {
    // console.log('notes', notes)
    const [hidden, setHidden] = useState(true)
    function onEditBackground(noteId) {
        setHidden(!hidden)
    }
    return <ul className="note-list">
        {
            notes.map(note => <li key={note.id}>
                <NotePreview note={note} />
                <NoteControls noteId={note.id}
                    onRamoveNote={onRemoveNote}
                    onPinNote={onPinNote}
                    onEditBackground={onEditBackground} />
                {!hidden && <BgColorSelection />}
                {/* <Link to={`/book/${book.id}`}><button>Select book</button></Link> */}
            </li>)
        }
    </ul>

}
