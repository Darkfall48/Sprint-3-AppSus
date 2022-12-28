export function NoteControls({ noteId, onRamoveNote, onPinNote, onEditNote, onEditBackground }) {
    return <div className="note-controls-container">
        <button className="fa-solid fa-trash  ctrl-btn" onClick={() => onRamoveNote(noteId)}></button>
        <button className="fa-solid fa-thumbtack  ctrl-btn" onClick={() => onPinNote(noteId)}></button>
        <button className="fa-solid fa-pen-to-square  ctrl-btn" onClick={() => onEditNote(noteId)}></button>
        <button className="fa-solid fa-palette  ctrl-btn" onClick={() => onEditBackground(noteId)}></button>
    </div>

}