import { useState, useRef} from "react";
import Todo from "./Todo"; 
function App() {
  const [todos, setTodos] = useState([])
  const nam = useRef()
  function add(e){
    const name = nam.current.value
    setTodos(pt => {
      return [...pt, {name: name}]
    })
    nam.current.value = null
  }
  return (

    <> 
    <button onClick={add}> Ad Todo</button> 
    <input ref={nam} type='text'/>
    <Todo todos={todos}/> 
    </>
   
  );
}

export default App;
