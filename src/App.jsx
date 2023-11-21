import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deccrementCounter,
  getAllTodos,
  incrementCounter,
  resetCounter,
} from "./components/action";
import { useEffect } from "react";

function App() {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  // const increment = ()=> {
  //   dispatch(incrementCounter())

  // }

  // const deccrement = ()=> {
  //   dispatch(deccrementCounter())

  // }
  // const reset = ()=> {
  //   dispatch(resetCounter())

  // }

  return (
    <>
      <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {todos.map((todo) => {
          return <article>
            <h1>{todo.title}</h1>
          </article>;
        })}

        {/* <h1>count:{count}</h1> <br />
      <button onClick={increment} >increment</button>
      <button onClick={deccrement}>decrement</button>
      <button onClick={reset}>reset</button> */}
      </div>
    </>
  );
}

export default App;
