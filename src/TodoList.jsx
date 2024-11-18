import React from "react";

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

function TodoList(){
    return (
        /* Unordered list that renders each item in the todoList array as a list item */
        <ul>
            {todoList.map(function(item){
                return <li key={item.id}>{item.title}</li>;
            })}
        </ul>
    );
}
export default TodoList;