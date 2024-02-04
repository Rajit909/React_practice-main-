import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState([""]);

  let addNewTodo = () => {
    console.log("new");
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let delTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  // let lowerCaseAll = () => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       return {
  //         ...todo,
  //         task: todo.task.toLowerCase(),
  //       };
  //     })
  //   );
  // };

  let lowerCaseone = (id) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => {
        if(todo.id === id){
        return {
          ...todo,
          task: todo.task.toLowerCase()
        }
        }else{
          return todo;
        }
      })
    )
  }

  return (
    <>
      <h4>Todo-list</h4>
      <div className="main-list">
        <div>
          <input
            placeholder="add a task"
            value={newTodo}
            onChange={updateTodoValue}
          />

          <button
            style={{
              backgroundColor: "gray",
              marginLeft: "2px",
            }}
            onClick={addNewTodo}
          >
            Add task
          </button>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <h4>Tasks to do</h4>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.task}</span>
                <button id="taskbtn" onClick={() => delTask(todo.id)}>
                  ❌
                </button>
                <button id="taskbtn" onClick={lowerCaseone}>
                  LC
                </button>
              </li>
            ))}
            <button id="taskbtn" onClick={upperCaseAll}>
              UpperCase
            </button>
            {/* <button id="taskbtn" onClick={lowerCaseAll}>
              lowerCase
            </button> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;