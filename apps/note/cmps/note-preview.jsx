export function NotePreview({ note }) {
    return <article className="note-preview">
        <p>{note.info.txt}</p>
    </article>
}