import {useContext, createContext} from "react";

const TodoContext = createContext({
    todos:[{
        id:'',
        todo:'',
        completed:false
    }],
    createTodo:()=>{},
    delelteTodo:()=>{},
    updateTodo:()=>{},
})

 export const  TodoProvider = TodoContext.Provider

 export const useTodo = ()=>{
  return  useContext(TodoContext)
 }