import React from "react";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function TodoList() {
  let [todos, setTodos] = useState([{task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState([""]);

  let addNewTodo = () => {
    console.log("new");
    setTodos((prevTodos)=>{
        return [...prevTodos, {task: newTodo, id: uuidv4()}]
    })
    setNewTodo("")
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let delTask = (id) => {
    setTodos(todos.filter((todo) => todo.id != id))

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
          <br />
          <hr />
          <h4>Tasks to do</h4>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.task}</span>
                <button id="delbtn"
                onClick={() => delTask(todo.id)}
                >❌</button>
              </li>
              
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
