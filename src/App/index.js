import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar Cebolla", completed: true },
//   { text: "Tomar Curso de intro a React", completed: false },
//   { text: "Llorar con la Llorona", completed: true },
// ];

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(true);
  const [items, setItems] = React.useState(initialValue);

  React.useEffect(()=> {
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItems(parsedItem);
        setLoading(false);
      }
      catch(error){
        setError(true);
      }
    }, 1000);
  }, []);  

  const saveItems = (newItems) => {
    try{
      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItems);
      setItems(newItems);    
    }catch(error){
      setError(true);
    }
  }

  return {
    items,
    saveItems,
    loading,
    error,
  };
}


function App() {
  const {
    items: todos, 
    saveItems: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos =  [];

  if(!searchValue.length > 0){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }


  return (
    <AppUI 
    loading={loading}
    error={error}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo={completeTodo}
    deleteTodo = {deleteTodo}
    />
  );
}

export default App;
