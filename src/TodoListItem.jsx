import React from "react";

// Update TodoListItem component to use props. The props are named todo for this exercise. 
const TodoListItem = (todo) => {

    return (
        <li>{todo.todo.title}</li>
    );
}

export default TodoListItem;