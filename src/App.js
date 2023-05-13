import React, { useState , useEffect } from "react";
import ToDoItems from "./ToDoItems";
import InputForm from "./InputForm";

const getDataFromLocalStorage = ()=>{
  const LIST = localStorage.getItem("LIST");

  if(LIST){
    return JSON.parse(localStorage.getItem("LIST"));
  }
  else{
    return [];
  }
}

function App() {

  const [list, setList] = useState(getDataFromLocalStorage)

  useEffect(()=>{
    localStorage.setItem("LIST" , JSON.stringify(list));
  } , [list] );


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

