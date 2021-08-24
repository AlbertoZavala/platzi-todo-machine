import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {  
  const {totalTodos, completedTodos} = useContext(TodoContext);
  return(
    <h2 className="TodoCounter">Has completado {totalTodos} de {completedTodos} TODOs</h2>
  );
}

export { TodoCounter };