import React from 'react'

function handleFormSubmit(event){
    event.preventDefault();
    console.log("form submitted succesfully");
}

function Form() {
  return (
    <>
        <form action="" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type='text' name="name" id="name" placeholder='Enter name'/>
            <br />
            <br />
            <label htmlFor="name">Email:</label>
            <input type="email" name="email" id="email" placeholder='Enter email'/>
            <br /><br />
            <label htmlFor="name">Password:</label>
            <input type="password" name="pass" id="pass" placeholder='Enter password'/>
            <br />
            <br />
            <button >Submit</button>
        </form>
    </>
  )
}

export default Form