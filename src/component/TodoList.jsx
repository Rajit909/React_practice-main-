import React from 'react'
import { useState } from 'react'

function TodoList() {
   let [todos, setTodo] =useState(["sample task"])





  return (
    <>
        <h4>Todo-list</h4>
        <div className='main-list'>
            <div >
            <input type="text" name="" id="" />
            
            <button style={{
                backgroundColor: "gray",
                marginLeft: "2px"
            }}>Add task</button>
            </div>
            <div>
            <br /><br /><br /><br /><br /><br />
            <hr />
            <h4>Tasks to do</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
            </div>
                
        </div>
    </>
  )
}

export default TodoList