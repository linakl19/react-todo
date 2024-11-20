import React from "react";
import TodoListItem from "./TodoListItem";

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

// Refactor TodoList.jsx to use new TodoListItem component
function TodoList(){
    return (
        <ul>
            {/* Use the TodoListItem component inside the map()*/}
            {todoList.map(function(todo){
                // Pass key as a prop equal to the id of the todo object and pass todo as a prop
                return <TodoListItem key={todo.id} todo={todo}/>;
            })}
        </ul>
    );
}
export default TodoList;