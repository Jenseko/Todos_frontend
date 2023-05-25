import React, { useState } from 'react'

// ---------------------------------------------------

const TodoItems = (props) => {
    const [finish, setFinish] = useState(false);
    console.log(props);

    const done = () => {
        // not ! operator => toggle funktion
        setFinish(!finish);
    }

    const deleteTodo = () => {
        // console.log("func works");
        // filtert alles raus was nicht mein einzelnes todo ist
        const newTodoList = props.completeTodoArr.filter((elt) => {
            return elt !== props.todo
        })
        // console.log(newTodoList);
        props.delete(newTodoList);
    }
    return (
        <li style={{ textDecoration: finish ? "line-through" : "none", listStyle: 'none' }}>
            <input type="checkbox" name="" id="" onChange={done} />
            <span>{props.todo}</span>
            <button onClick={deleteTodo}>Delete</button>
        </li>
    );
}

export default TodoItems;
