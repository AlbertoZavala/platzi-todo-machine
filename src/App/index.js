import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar Cebolla", completed: true },
//   { text: "Tomar Curso de intro a React", completed: false },
//   { text: "Llorar con la Llorona", completed: true },
// ];

function App() {
  return (

    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;
