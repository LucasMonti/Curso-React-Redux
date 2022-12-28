import React, { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })
  
    return (
        
    <>
      <h1>Counter:{count.counter1}</h1>
      <h1>Counter:{count.counter2}</h1>
      <h1>Counter:{count.counter3}</h1>
      <hr />
      <button onClick={() => setCount({...count,  counter1: count.counter1 + 1})}>+1</button>
    </>
  );
};
