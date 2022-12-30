export function NoteVideo(props) {
    const { note } = props
    const url=note.info.url
    console.log('note.info.url', note.info.url)
    return <div>
        {/* {url}
        </div> */}
        {/* <iframe src={`${url}`} width={300} height={150} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"></iframe> */}
        <iframe width="300" height="150" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    </div>
}