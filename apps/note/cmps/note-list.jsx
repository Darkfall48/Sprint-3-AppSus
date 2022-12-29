const { Link } = ReactRouterDOM
const { useState, useEffect, useRef } = React

import { NotePreview } from "./note-preview.jsx";
import { NoteControls } from "./note-controls.jsx";
import { BgColorSelection } from "./bg-color-select.jsx";

export function NoteList({ notes, onRemoveNote, onPinNote, onEditNote,onChangeBackgroundColor }) {
    const [hidden, setHidden] = useState(true)
    // const [color, setColor] = useState('default')
// useEffect(()=>{

// },[editMode])

    function onEditBackground() {
        setHidden(!hidden)
    }



    return <ul className="note-list">
        {
            notes.map(note => <li key={note.id} className={note.bgColor}>
                <NotePreview note={note} />
                <NoteControls note={note}
                    noteId={note.id}
                    onRamoveNote={onRemoveNote}
                    onPinNote={onPinNote}
                    onEditBackground={onEditBackground}
                    onEditNote={onEditNote} />
                {!hidden && <BgColorSelection note={note} onChangeBackgroundColor={onChangeBackgroundColor} />}
                {/* <Link to={`/book/${book.id}`}><button>Select book</button></Link> */}
            </li>)
        }
    </ul>
    


}

// function onChangeBackgroundColor(chosenColor) {
//     console.log('color', chosenColor)
//     setColor(chosenColor)
//     // setHidden(true)
// }