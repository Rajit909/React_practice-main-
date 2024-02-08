import React, { useState } from 'react'
import "./Lottery.css"
import Ticket from "./Ticket"
import { genTicket, sum } from './helper'



function Lottery({n, winningSum}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum
    
    let buyTicket = () => {
      setTicket(genTicket(n))
    }
    
  return (
    <>
    <div className='main-continer'>
      <h3>Lottery Game!</h3>
        <div >
          <Ticket ticket={ticket}/>
          <button onClick={buyTicket}>Buy new ticket</button>
          <h3>{isWinning&& "Congraltulation you Won the Game!"}</h3>
        </div>
    </div>
    </>
  )
}

export default Lottery