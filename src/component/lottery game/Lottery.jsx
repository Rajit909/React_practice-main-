import React, { useState } from 'react'
import "./Lottery.css"
import {genTicket, sum} from "./helper"

function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15
    
    let buyTicket = () => {
        setTicket(genTicket(3))
    }

  return (
    <>
    <div className='center'>
    <h1>Lottery Game!</h1>
    <div className='ticket-container'>
    <span>{ticket[0]}</span>
    <span>{ticket[1]}</span>
    <span>{ticket[2]}</span>
    </div>
    <button onClick={buyTicket}>Buy more ticket</button>
    <h3 style={{
        backgroundColor: "yellow"
    }}>{isWinning && "Congraltulation, You won!"}
    </h3>
    <p>{sum(ticket)}</p>
    </div>
    
    </>
  )
}

export default Lottery