
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { deccrementCounter, incrementCounter, resetCounter } from './components/action'

function App() {
  const count = useSelector(state=> state.count)
const dispatch = useDispatch()
  
  const increment = ()=> {
    dispatch(incrementCounter())

  }
 
  const deccrement = ()=> {
    dispatch(deccrementCounter())

  }
  const reset = ()=> {
    dispatch(resetCounter())

  }
 

  return (
    <>
    <div>
      <h1>count:{count}</h1> <br />
      <button onClick={increment} >increment</button>
      <button onClick={deccrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
      
    </>
  )
}

export default App
