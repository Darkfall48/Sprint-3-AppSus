const { useState, useEffect, useRef } = React

export function BgColorSelection({ note, onChangeBackgroundColor }) {
    const [color, setColor] = useState('default')
    const ref = useRef(null)
    const handleClick = () => {
        const chosenColor = ref.current.getAttribute('data-color')
        console.log('chosenColor', chosenColor)
        return chosenColor
        // setColor(chosenColor)
    }
    return <div className="color-palette-container">
        <div className="color-select purple-bg" ref={ref} onClick={() => {
            onChangeBackgroundColor(note, handleClick())
        }} data-color="purple"  ></div>
        
        <div className="color-select pink-bg" ref={ref} onClick={() => {
            onChangeBackgroundColor(note, handleClick())
        }} data-color="pink"  ></div>
        <div className="color-select blue-bg" ref={ref} onClick={() => {
            onChangeBackgroundColor(note, handleClick())
        }} data-color="blue"  ></div>
        <div className="color-select green-bg" ref={ref} onClick={() => {
            onChangeBackgroundColor(note, handleClick())
        }} data-color="green"  ></div>
    </div>
}