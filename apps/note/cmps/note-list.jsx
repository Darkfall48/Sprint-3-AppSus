const {Link} = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx";

export function NoteList({notes}) {
console.log('notes', notes)
    return <ul className="note-list">
    {
        notes.map(note => <li key={note.id}>
            <NotePreview note={note} />
            {/* <div> */}
                {/* <button onClick={() => onRemoveBook(book.id)}>Remove book</button> */}
                {/* <Link to={`/book/${book.id}`}><button>Select book</button></Link> */}
            {/* </div> */}
        </li>)
    }
</ul>

}
