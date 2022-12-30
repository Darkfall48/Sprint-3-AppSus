export function BgColorSelection({ note, onChangeBackgroundColor, onEditBackground }) {
  return (
    <div className="color-palette-container">
      <div
        className="color-select default-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'default')
          onEditBackground(note.id)
        }}
        title="default"
      ></div>
      <div
        className="color-select purple-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'purple')
          onEditBackground(note.id)
        }}
        title="purple"
        ></div>

      <div
        className="color-select pink-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'pink')
          onEditBackground(note.id)
        }}
        title="pink"
        ></div>

      <div
        className="color-select blue-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'blue')
          onEditBackground(note.id)
        }}
        title="blue"
        ></div>

      <div
        className="color-select green-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'green')
          onEditBackground(note.id)
        }}
        title="green"
      ></div>
    </div>
  )
}
