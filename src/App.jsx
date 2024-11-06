import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//List of todo items,each with a unique id and title
const todoList = [
  {
    id:1,
    title: "Take dogs for a walk."
  },
  {
    id:2,
    title: "Make dinner."
  },
  {
    id:3,
    title: "Complete CTD assigment."
  }
];

//App component
function App() {
  return (
    <>
      <div>
        {/* Level 1 heading */}
        <h1>Todo List</h1>

        {/* Unordered list that renders each item in the todoList array as a list item */}
        <ul>
          {todoList.map(function(item){
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  )
}

export default App
