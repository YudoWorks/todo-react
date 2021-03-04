import React, { useState } from 'react'
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </header>
    </div>
  );
}

export default App;
