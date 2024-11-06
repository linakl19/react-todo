import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function App() {
  return (
    <>
      <div>
        <h1>Todo List</h1>
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
