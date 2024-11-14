import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'


//App component
function App() {
  return (
    <>
      <div>
        {/* Level 1 heading */}
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </>
  )
}

export default App
