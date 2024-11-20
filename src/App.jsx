import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

//App component
function App() {

  // create a new state variable named newTodo with update function named setNewTodo
  const  [newTodo, setNewTodo] = React.useState('');

  return (
    <>
      <div>
        <h1>Todo List</h1>
        {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component */}
        <AddTodoForm onAddTodo={setNewTodo}/>
        {/* add a paragraph element that displays the value of newTodo variable */}
        <p>{newTodo.value}</p>
        <TodoList />
      </div>
    </>
  )
}

export default App
