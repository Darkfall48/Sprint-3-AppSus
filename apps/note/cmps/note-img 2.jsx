export function NoteImg(props) {
    const { note } = props
    const url = note.info.url
    // console.log('note.info.url', note.info.url)
    return <div>
            <img src={url} alt="" />
        </div>
}
