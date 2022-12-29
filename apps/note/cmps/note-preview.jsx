export function NotePreview({ note }) {
console.log(note)
    return <article className="note-preview">
        {/* <h2>Book title: {book.title}</h2> */}
        {/* <h3>Price: {book.price}</h3> */}
        <h3>{note.info.txt}</h3>
        {/* <h4>Description: {book.description}</h4>
        {book.thumbnail && <img src={`${book.thumbnail}`} alt="" />}
        {!book.thumbnail && <img src={`assets/style/img/default.png`} alt="" />} */}
    </article>
}