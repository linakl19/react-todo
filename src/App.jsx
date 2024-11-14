import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

//App component
function App() {
  return (
    <>
      <div>
        {/* Level 1 heading */}
        <h1>Todo List</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </>
  )
}

export default App
