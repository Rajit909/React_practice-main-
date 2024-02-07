import React, { useState } from 'react'
import "./Lottery.css"
import Ticketnum from "./Ticketnum"

function Lottery() {
    

  return (
    <>
    <div className='main-continer'>
        <div>
    <Ticketnum num={2}/>    
    <Ticketnum num={2}/>    
    <Ticketnum num={2}/>    
        </div>
    </div>
    </>
  )
}

export default Lottery