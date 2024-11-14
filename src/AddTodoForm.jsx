import React from "react";

// Component for a form that allows users to add a new todo item, 
// including a label and input field for the todo title, and a submit button
const AddTodoForm = () => {
    return (
        <form action="">
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;