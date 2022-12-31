import { NoteTxt } from './note-txt.jsx'
import { NoteVideo } from './note-video.jsx'
import { NoteImg } from './note-img.jsx'

export function NotePreview({ note, txt, noteType, length}) {
  return (
    <article 
    className="note-preview">
      <DynamicCmp
        name="Note"
        note={note}
        txt={txt}
        length={length}
        noteType={noteType}
      />
    </article>
  )
}

function DynamicCmp(props) {
  // console.log('props.note.type', props.note.type)
  // console.log('props.noteType', props.noteType)
  // if (props.note.type !== props.noteType) return
  switch (props.note.type) {
    case 'note-txt':
      return <NoteTxt {...props} />
    case 'note-video':
      return <NoteVideo {...props} />
    case 'note-img':
      return <NoteImg {...props} />
  }
}
