import React, { useEffect, useState } from "react";
import { useTodo } from "./context/TodoContext";
import TodoItem from "./TodoItem";
const TodoForm = () => {
  const [todo, setTodo] = useState({});
  const [message, setMessage] = useState("");
  const [firstLoad, setfirstLoad] = useState(true)
  const { createTodo,todos } = useTodo();
  const add = (e) => {
    e.preventDefault()
    if(message=='') return
    setTodo({
      todo: message,
      id: Date.now(),
      completed: false,
    });
  };

  useEffect(()=>{
    if(firstLoad){
        setfirstLoad(false)
        return
    }


    createTodo(todo)
    document.getElementById('msg').value = ""
    setMessage('')
  },[todo])
  return (
    <div className=" w-full  flex rounded-lg justify-center items-center">
      <form className="sm:w-11/12 w-full  flex justify-center items-center">
        <input type="text" id='msg' onChange={(e)=>setMessage(e.target.value)} className=" sm:w-1/2 w-11/12 h-16 outline-none p-5 rounded-s-2xl lg:text-2xl "/>
        <button onClick={add} className="bg-orange-500 h-16 p-5 rounded-e-lg">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
