import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice, decrement, increment, incrementBy2 } from './store/slices/counters/counterSlice'

function App() {
 

const {counter} = useSelector(store => store.counter)
const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {counter}</p>
        <button onClick={() => dispatch(decrement())}>
          decrement 
        </button>
       
        <button onClick={() => dispatch(increment())}>
          increment 
        </button>

        <button onClick={() => dispatch(incrementBy2(2))}>
          Increment by 2 
        </button>
      </div>
    </div>
  )
}

export default App
