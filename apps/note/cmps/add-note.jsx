const { useState } = React
import { noteService } from '../services/note.service.js'

export function AddNote({ onSaveNote, onSetNoteType }) {
  const [note, setNote] = useState(noteService.getDefaultNote())

  // function handleChange({ target }) {
  //     console.log('target', target)
  //     let { value, name: field, type } = target
  //     value = type === "range" ? +value : value
  //     setNote((prevNote => {
  //         return { ...prevNote, [field]: value }
  //     }))
  // }

  function handleChangeTxt({ target }) {
    // console.log('target', target)
    let { value } = target
    setNote((prevNote) => {
      return { ...prevNote, info: { txt: value } }
    })
  }

  function onSubmitNote(ev) {
    ev.preventDefault()
    onSaveNote(note)
    setNote(noteService.getDefaultNote())
  }
  return (
    <div className="add-note-container">
      <form onSubmit={onSubmitNote}>
        <label htmlFor="note-txt"></label>
        <input
          type="text"
          id="note-txt"
          name="note-txt"
          placeholder="Take a note..."
          value={note.info.txt}
          onChange={handleChangeTxt}
        />
        {/* <button>Submit</button> */}
        <select
          className="type-note-container"
          multiple
          onChange={(ev) => onSetNoteType(ev.target.value)}
        >
          <option
            title="Add Text"
            className="fa-solid fa-font type-note"
            value="note-text"
          ></option>
          <option
            title="Add Picture"
            className="fa-solid fa-image type-note"
            value="note-image"
          ></option>
          <option
            title="Add Video"
            className="fa-solid fa-play type-note"
            value="note-video"
          ></option>
        </select>

        {/* <i className="fa-solid fa-font type-note"></i>
            <i className="fa-solid fa-image type-note"></i> */}
      </form>
    </div>
  )
}
