import './App.css'
import { useState } from 'react'
import ToDoItem from './component/ToDoItem';
import Input from './component/Input';

function App() {

   const[listOfTask, setListOftask] = useState([]);

  
  function addTask(newTask) {
    setListOftask((prevList) => [...prevList, newTask]);
  } 

  function deleteItem(id) {
    setListOftask(prevItems => {
        return prevItems.filter((item, index) => {
            return index !== id;
        });
    });
  }

  return (
    <>
        <div className='container'>
          <div className='header'>
            <h2>To-doList</h2>
          </div>
            <Input
              onAdd = {addTask}
            />
          <ul>
              {listOfTask.map((value, index) => {
                  return (
                  <ToDoItem 
                    key = {index}
                    id = {index}
                    item = {value}
                    onChecked = {deleteItem}
                  />
                )
              })}
          </ul>
        </div>
    </>
  )
}

export default App
