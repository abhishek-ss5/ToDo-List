import React, { useState } from "react";
import ToDoItems from "./ToDoItems";
import InputForm from "./InputForm";

function App() {

  const [list, setList] = useState([])


  // function handleClick() {
  //   setList(list.push(inputText))           //This is wrong way....
  // }


  function handleClick(inputText) {
    setList([...list, inputText])             //This is also the right way of doing it......
  }


  // function handleClick() {
  //   setList(prevItems => {
  //     return [...prevItems, inputText];        //This is the right way of doing it....
  //   });
  //   setInputText("");
  // }

  function deleteItem(id) {
    setList(prevValue => {

      return prevValue.filter((ITEM, index)=>{
        return (index !== id)
      })
      
    })
  }


  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div>
        <InputForm 
          onAddClick={handleClick}
        />
      </div>

      <div>
        <ul>
          {list.map(function (listItem, index) {
            return (
              <ToDoItems key={index} onChecked={deleteItem} id={index} item={listItem} />
            )
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;

