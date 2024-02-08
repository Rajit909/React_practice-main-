import React from 'react'
import './App.css'
import Lottery from './component/lottery game/Lottery'
// import TodoList from './component/TodoList'
// import LudoBoard from './component/LudoBoard'
// import LikeButton from './component/LikeButton'
// import Counter from './component/Counter'
// import Producttab from './component/producttab'
// import Button from './component/Button'
// import Form from './component/Form'



function App() {
  let winCondition = (ticket) =>{
    return ticket.every((num) => num === ticket[0])
  }
  return (
    <>
      {/* <Form/> */}
      {/* <Producttab/> */}
      {/* <Button/> */}
      {/* <Counter/> */}
      {/* <LikeButton/> */}
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App