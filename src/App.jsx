import { useState } from 'react'
import './App.css'

function App() {

  const[task, setTask] = useState("");

  const[listOfTask, setListOftask] = useState([]);

  function inputHandler(event) {
    const newvalue = event.target.value;
    setTask(newvalue);
  }

  function submitHandler(event) {
    event.preventDefault();
    if(task.trim() !== "") {
      setListOftask((previous) => [...previous, task])
      setTask("");
    }
  }

  return (
    <>
        <div className='container'>
          <div className='header'>
            <h2>To-doList</h2>
          </div>
          <form onSubmit={submitHandler}>
              <input type="text" 
                onChange={inputHandler}
                placeholder='to-do-list'
                value={task}
              />
              <button onClick={submitHandler}>Add</button>
          </form>
          <ul>
            {listOfTask.map((submitValue) => {
              return (
                  <li>{submitValue}</li>
              );
            })}
          </ul>
        </div>
    </>
  )
}

export default App
