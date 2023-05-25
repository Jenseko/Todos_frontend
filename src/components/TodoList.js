import ListItem from "./ListItem";
import { useState } from "react";

const TodoList = () => {

    const [listItem, setListItem] = useState(["Item hinzugügen", "Buch lesen", "Ins Fitness Studio gehen"]);

    const addInput = () => {
        const inputItem = document.querySelector('form input[type="text"]').value;
        setListItem([...listItem, inputItem]);
        // inputItem.value = "";
    };

    return (
        <div>
            {listItem.map((item) => {
                return (
                    <div key={item}>
                        <ListItem
                            listItem={item}
                        />
                        <form action='#'>
                            <input type="text" name="inputtext" id="inputtext" placeholder="...Add" />
                            <input type="button" value="Hinzufügen" onClick={addInput} />
                        </form>
                    </div>
                )
            })}
        </div>
    );
};


export default TodoList;

