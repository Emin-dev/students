import { useState } from "react";
import Todo from "./Todo"; 
function App() {
  const [todos ]=useState([{name:'toto'}])
  return (

    <> 
    <Todo todos={todos}/>  
    <input type='text'/>
    <button> Ad Todo</button>
    </>
   
  );
}

export default App;
