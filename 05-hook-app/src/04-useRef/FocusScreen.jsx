import React, { useRef } from 'react'

export const FocusScreen = () => {
const inputRef = useRef()

const clickRef = () => { 
    inputRef.current.select()
 }

  return (
    <div>Focus Screen
    <hr />

    <input type="text"
    ref={inputRef}
    placeholder='ingrese su nombre' />

    <button
    onClick={clickRef}>
        Set Focus
    </button>

    </div>

  )
}
