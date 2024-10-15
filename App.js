import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <h1>Ma Liste de Tâches</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
