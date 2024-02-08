import React, { useState } from "react";
import "../App.css";

function handleFormSubmit(event) {
  event.preventDefault();
  console.log("form submitted succesfully");
}

function Form() {
  let [fullName, setFullName] = useState("");

  let handleNameChange = (event) =>{
    setFullName(event.target.value)
  }
  return (
    <>
      <div className="form">
        <form action="" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleNameChange}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
