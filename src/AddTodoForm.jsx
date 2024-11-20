import React from "react";

// Add props as a parameter in the AddTodoForm function
const AddTodoForm = (props) => {
    // create a new function called handleAddTodo that takes event as a parameter

    const handleAddTodoForm = (event) => {

        // prevent the default behavior of the form submit
        event.preventDefault();
        
        // retrieve the value of the title element from the event target
        console.log(event.target);
        let todoTitle = event.target.title.value;
        console.log(todoTitle);

        // invoke the onAddTodo callback prop and pass todoTitle as an argument
        props.onAddTodo(todoTitle);

        // reset the form so the text input value is cleared
        event.target.reset();
    };

    return (
        // Add onSubmit prop to form element and pass the handleAddTodo function by reference
        <form onSubmit={handleAddTodoForm}>
            <label htmlFor="todoTitle">Title</label>
            {/* Add a name attribute to the text input with value title */}
            <input type="text" id="todoTitle" name="title"/>
            <button type="submit" >Add</button>
        </form>
    );
}

export default AddTodoForm;