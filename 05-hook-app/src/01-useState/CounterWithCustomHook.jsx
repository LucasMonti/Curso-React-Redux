import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {counter, increment, reset, decrement} = useCounter();

  return (
    <>
    <div>CounterWithCustomHook : {counter}</div>
    <button onClick={() => decrement ()}>-1</button>
    {/* el primer valor que ingrese como parámetro dentro de la función increment es el evento del click */}
    <button onClick={reset}>Reset</button> 
    <button onClick={increment}>+1</button> 
    <hr />
    </>

  )
}
