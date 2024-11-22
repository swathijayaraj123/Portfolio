import React, { useCallback, useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext.js";
import TodoForm from "./TodoForm.jsx";
import TodoItem from "./TodoItem.jsx";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [firstLoad, setfirstLoad] = useState(true);
  const [updated, setUpdated] = useState(false); // show the if notes was updated
  const createTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };
  //console.log(todos);

  const delelteTodo = (todo) => {
    setTodos((prev) => {
      return prev.filter((item) => {
        //console.log(item.id + " " + todo)
        return item.id != todo;
      });
    });
  };
  //console.log(todos)

  const updateTodo = useCallback((todo, msg) => {
    const editedTodo = todos.map((eachitem) => {
      if (eachitem.id == todo.id) {
        eachitem.todo = msg;
      }
      return eachitem;
    });
    // console.log(editedTodo)
    setTodos(editedTodo);
    setUpdated(true);
  });


  function StorageGet() {
    const RetrivedTodos = localStorage.getItem("todos");
    //console.log(RetrivedTodos)
    return RetrivedTodos ? JSON.parse(RetrivedTodos) : [];
  }

  function StorageSet() {
    localStorage.setItem("todos", JSON.stringify(todos));
    //console.log('saved')
  }

  useEffect(() => {
    if (firstLoad) {
      setfirstLoad(false);
      return;
    }
    StorageSet();
  }, [todos]);

  useState(() => {
    const data = StorageGet();
    setTodos(data);
    //console.log("retreive")
  });

  useEffect(() => {
    if (firstLoad) {
      setfirstLoad(false);
      return;
    }
    setTimeout(() => {
      setUpdated(false);
    }, 500);
  }, [updated]);
  return (
    <TodoProvider value={{ todos, createTodo, delelteTodo, updateTodo }}>
      <div className="min-h-screen min-w-screen bg-blue-900 flex justify-center sm:p-10 p-3">
        <div className="w-full h-full">
          {updated ? (
            <span className="bg-orange-400 m-2 p-2">updated</span>
          ) : (
            <></>
          )}
          <TodoForm />
          <div>
            {todos == [] ? (
              <></>
            ) : (
              todos.map((eachitem) => {
                return <TodoItem key={eachitem.id} todo={eachitem} />;
              })
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default Todo;
