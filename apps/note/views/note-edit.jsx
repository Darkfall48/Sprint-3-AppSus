export function NoteEdit() {
    return <div className="edit-container">
        <h3>Edit your note</h3>
        <form action="edit-note-form">

            <textarea type="text" className="edit-note-txt" />
            <button>Close</button>
        </form>

    </div>
}