const { useState, useEffect, useRef } = React

export function BgColorSelection({ note, onChangeBackgroundColor }) {
  const [color, setColor] = useState('default')
  const ref = useRef(null)
  return (
    <div className="color-palette-container">
      <div
        className="color-select purple-bg"
        ref={ref}
        onClick={() => {
          onChangeBackgroundColor(note, 'purple')
        }}
        title="purple"
      ></div>

      <div
        className="color-select pink-bg"
        ref={ref}
        onClick={() => {
          onChangeBackgroundColor(note, 'pink')
        }}
        title="pink"
      ></div>

      <div
        className="color-select blue-bg"
        ref={ref}
        onClick={() => {
          onChangeBackgroundColor(note, 'blue')
        }}
        title="blue"
      ></div>

      <div
        className="color-select green-bg"
        ref={ref}
        onClick={() => {
          onChangeBackgroundColor(note, 'green')
        }}
        title="green"
      ></div>
    </div>
  )
}
