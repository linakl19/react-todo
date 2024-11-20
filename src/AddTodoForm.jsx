import React from "react";


const AddTodoForm = () => {
    const handleAddTodoForm = () => {

    };

    return (
        <form action="">
            <label htmlFor="todoTitle">Title</label>
            {/* Add a name attribute to the text input with value title */}
            <input type="text" id="todoTitle" name="title"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;