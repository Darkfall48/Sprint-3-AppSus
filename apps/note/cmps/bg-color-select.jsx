const { useState, useEffect, useRef } = React

export function BgColorSelection({ note, onChangeBackgroundColor }) {
    const [color, setColor] = useState('default')
    const ref = useRef(null)
    //     const handleClick = (ev) => {
    // console.log('ev', ev)
    //         ev.stopImmediatePropagation()
    //         console.log(ev.traget)
    //         const chosenColor = ref.current.getAttribute('data-color')
    //         console.log('chosenColor', chosenColor)
    //         return chosenColor
    //         // setColor(chosenColor)
    //     }
    function handleClick(ev) {
        console.log('ev', ev)
        ev.stopPropagation()
        // ev.stopImmediatePropagation()
        const chosenColor = ref.current.getAttribute('data-color')
        console.log('chosenColor', chosenColor)
        setColor(chosenColor) 
    }
console.log('color', color)
    // const handleClick = event => {
    //     console.log(event)
    // }


    return <div className="color-palette-container">

        <button className="color-select default-bg" ref={ref} onClick={handleClick} data-color="default"  ></button>
        <button className="color-select purple-bg" ref={ref} onClick={handleClick} data-color="purple"  ></button>
        {/* <div className="color-select default-bg" ref={ref} onClick={() => {
            onChangeBackgroundColor(note, handleClick())
        }} data-color="default"  ></div> */}
        {/* 
        <div className="color-select purple-bg" ref={ref} onClick={() => {
            onChangeBackgroundColor(note, handleClick())
        }} data-color="purple"  ></div> */}

        <div className="color-select pink-bg" ref={ref} onClick={() => {
            onChangeBackgroundColor(note, handleClick())
        }} data-color="pink"  ></div>

        <div className="color-select green-bg" ref={ref} onClick={() => {
            onChangeBackgroundColor(note, handleClick())
        }} data-color="green"  ></div>

        <div className="color-select blue-bg" ref={ref} onClick={() => {
            onChangeBackgroundColor(note, handleClick())
        }} data-color="blue"  ></div>


    </div>
}