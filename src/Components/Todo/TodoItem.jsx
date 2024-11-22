import React, { useState } from "react";
import { useTodo } from "./context/TodoContext";
const TodoItem = ({ todo, key }) => {
  const [todoEditable, setTodoEditable] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [value,setValue] = useState(todo.todo)

  const { delelteTodo, updateTodo } = useTodo();
  const handleDelete = (e) => {
    e.preventDefault();
    //console.log("this is the id", todo.id);
    delelteTodo(todo.id);
    setCompleted(false)
  };
  const handleInputChange = (e) => {
    const msg = e.target.value;
    setValue(msg)
    //console.log(msg, "this is messafe");
  };

  const handleUpdate = (e) => {
 
    e.preventDefault();
    setValue(todo.todo)
    if(todoEditable){
  
      updateTodo(todo, value);
    }
    setTodoEditable(!todoEditable);
   
  };
  return (
    <div className="flex justify-center">
    <div className="flex lg:w-3/4 w-full bg-slate-500 rounded-lg m-2 ">
      <input
        type="checkbox"
        checked={completed?"checked":''}
        onChange={() => {
          setCompleted(!completed);
        }}
        className="sm:w-10 w-6 ml-1"
      />
      {todoEditable==false ? (
        <p
          className={` ${completed ? "line-through bg-green-500 bg-opacity-40" : ""} w-full p-2 sm:text-xl `}
        >
          {todo.todo}
        </p>
      ) : (<form className="w-full"> <input type="text" onChange={handleInputChange} value={value} className="w-full p-2 sm:text-2xl outline-none " /> <button onClick={handleUpdate}></button></form>
       
      )}
      <div className="flex justify-center items-center">
      {todoEditable==false? (<button className="bg-red-400 sm:p-2 sm:m-2 rounded-md m-1 h-10 " onClick={handleDelete}>Delete
      </button>):<></>}
      <button className="bg-green-300 sm:p-2 sm:m-2 m-1 h-10 rounded-md" onClick={handleUpdate}>
        {todoEditable ? "Save" : "Edit"}
      </button>
      </div>
      
        </div>
     
 
    </div>
  );
};

export default TodoItem;
