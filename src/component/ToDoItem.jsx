import { useState } from "react";
import "../style/toDoItem.css"

function ToDoItem(props) {
    const [done, setDone] = useState(false);

    function handleClick() {
        setDone(!done);
    }

    return (
        <div className="h-container">
            <li onClick={handleClick} 
                style={{textDecoration: done ? "line-through": "none", cursor: "Pointer"}}>
                {props.item}
            </li> 
            <input type="checkbox" 
                onClick={() => {
                    props.onChecked(props.id);
                }}
            />
        </div> 
    );
}

export default ToDoItem;
