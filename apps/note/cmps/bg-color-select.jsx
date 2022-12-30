export function BgColorSelection({ note, onChangeBackgroundColor }) {
  return (
    <div className="color-palette-container">
      <div
        className="color-select default-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'default')
        }}
        title="default"
      ></div>
      <div
        className="color-select purple-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'purple')
        }}
        title="purple"
      ></div>

      <div
        className="color-select pink-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'pink')
        }}
        title="pink"
      ></div>

      <div
        className="color-select blue-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'blue')
        }}
        title="blue"
      ></div>

      <div
        className="color-select green-bg"
        onClick={() => {
          onChangeBackgroundColor(note, 'green')
        }}
        title="green"
      ></div>
    </div>
  )
}
