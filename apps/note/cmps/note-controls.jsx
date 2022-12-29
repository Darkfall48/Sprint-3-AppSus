const { Link } = ReactRouterDOM

export function NoteControls({  note, noteId, onRamoveNote, onPinNote, onEditNote, onEditBackground }) {

    const pinned = (note.isPinned)? 'note-pinned':''

    return <div className="note-controls-container">
        <button className="fa-solid fa-trash  ctrl-btn" onClick={() => onRamoveNote(noteId)}></button>
        <button className={`fa-solid fa-thumbtack  ctrl-btn ${pinned}`} onClick={() => onPinNote(note)}></button>
        <button className="fa-solid fa-pen-to-square  ctrl-btn" id="edit-btn" onClick={() => onEditNote(note)}></button>
        <button className="fa-solid fa-palette  ctrl-btn" onClick={() => onEditBackground(noteId)}></button>
    </div>

}