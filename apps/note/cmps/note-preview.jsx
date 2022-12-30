import { MailLongTxt } from '../../mail/cmps/mail-longtext.jsx'

export function NotePreview({ note }) {
    return <article className="note-preview">
        <MailLongTxt txt={note.info.txt} length={50} />
        {/* <p>{note.info.txt}</p> */}
    </article>
}