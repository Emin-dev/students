import { useState, useRef } from "react";
import Todo from "./Todo";
function App() {
  const [todos, setTodos] = useState([])
  const nam = useRef()
  function add(e) {
    const name = nam.current.value
    setTodos(pt => {
      return [...pt, { name: name }]
    })
    nam.current.value = null
  }
  return (

    <>
      <section id="info">
        <div class='container'>
          <div class='row'>
            <div class='column'>
              <p>{todos.length}</p>
              <button onClick={add}> Ad Todo</button>
              <input ref={nam} type='text' />
              <Todo todos={todos} />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default App;
