import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'


const heavyStuff = (counter = 5000) => {
  for(let i=0; i < counter; i++) {
    console.log(`${counter} veces renderizado`);
  }
}

export const MemoHook = () => {

const {counter, increment} = useCounter(5000)
const [show, setShow] = useState(true)

const memorizeValue = useMemo(()=>heavyStuff(counter), [counter])

  return (
    <>
    <h1>Counter: <small>{counter}</small></h1>

    <h4>{memorizeValue}</h4>

    <button
    onClick={() => increment()}>
        +1
    </button>

    <button onClick={()=> setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
    </button>
    </>
  )
}
