import React from 'react'
import './App.css'
import Producttab from './component/producttab'
import MsgBox from './component/MsgBox'


function App() {
  return (
    <>
      <MsgBox userName="React!" textColor="blue"/>
      
      <Producttab/>
    </>
  )
}

export default App