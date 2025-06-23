import { useState } from "react";

function Input(props) {
    
    const[task, setTask] = useState("");
 
    function inputHandler(event) {
        const newvalue = event.target.value;
         setTask(newvalue);
    }

    function submitHandler(event) {
     event.preventDefault();
        if(task.trim() !== "") {
        props.onAdd(task);
        setTask("");
    }
  }

    return (
        <>
            <form onSubmit={submitHandler}>
              <input type="text" 
                onChange={inputHandler}
                placeholder='to-do-list'
                value={task}
              />
              <button onClick={submitHandler}>Add</button>
            </form>
        </>
    );
}

export default Input