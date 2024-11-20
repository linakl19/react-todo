import React from "react";


const AddTodoForm = () => {
    // create a new function called handleAddTodo that takes event as a parameter
    const handleAddTodoForm = (event) => {
        // prevent the default behavior of the form submit
        event.preventDefault();
        // retrieve the value of the title element from the event target
        let todoTitle = event.target.title;
        console.log(todoTitle);
        // reset the form so the text input value is cleared
        event.target.reset();
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