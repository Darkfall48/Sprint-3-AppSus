const { Link } = ReactRouterDOM

export function NoteControls({
  note,
  noteId,
  onRamoveNote,
  onPinNote,
  onEditNote,
  onEditBackground,
}) {
  return (
    <div className="note-controls-container">
      <button
        title="Remove Note"
        className="fa-solid fa-trash  ctrl-btn"
        onClick={() => onRamoveNote(noteId)}
      ></button>
      <button
        title="Edit Note"
        className="fa-solid fa-pen-to-square  ctrl-btn"
        id={`edit-btn-${noteId}`}
        onClick={() => onEditNote(note)}
      ></button>
      <button
        title="Change Note color"
        className="fa-solid fa-palette  ctrl-btn"
        onClick={() => onEditBackground(noteId)}
      ></button>
    </div>
  )
}
