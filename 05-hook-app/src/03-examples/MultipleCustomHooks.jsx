import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter();

    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const {author, quote} = !!data && data[0]


  return (
    <>
        <h1>Breaking Quotes</h1>
        <hr />
        {

            isLoading ? ( <div>
                Loading...
            </div>) : 
            (<div>
                {`${quote} - ${author}`}
            </div>)
        }
       
            <button 
            disabled= {isLoading}
            onClick={increment}>Next Quote</button>
        
    </>
  )
}
