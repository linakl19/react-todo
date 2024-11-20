import React from "react";

const TodoListItem = (todo) => {

    return (
        <li>{todo.todo.title}</li>
    );
}

export default TodoListItem;