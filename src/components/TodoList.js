import TodoItems from './TodoItems.js';
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState(["Go shopping", "play video games", "partymarty"]);

    const addTodo = () => {
        // console.log("func works")
        const inputTodo = document.querySelector('form input[type="text"]').value
        // console.log(inputTodo);
        // nimm alles aus todos und füge den value aus dem input zu
        setTodos([...todos, inputTodo]);
        // cleart das input feld nachdem adden des todos
        document.querySelector('form input[type="text"]').value = "";
    }

    return (
        <section>
            <form action="#">
                <input type="text" name="" id="" />
                <input type="button" value="Add Todo" onClick={addTodo} />
            </form>
            <ul>
                {todos.map((elt, index) => {
                    // console.log(elt);
                    return (
                        <TodoItems
                            key={index}
                            todo={elt}
                            delete={setTodos}
                            completeTodoArr={todos}
                        />
                    )
                })}
            </ul>
        </section>
    );
}

export default TodoList;

