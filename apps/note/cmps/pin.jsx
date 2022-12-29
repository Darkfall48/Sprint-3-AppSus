export function Pin({ note, onPinNote }) {
    return  <button id="pin-btn" className={`fa-solid fa-thumbtack  ctrl-btn  ${(note.isPinned) ? 'note-pinned' : ''}`} onClick={() => onPinNote(note)}></button>

}