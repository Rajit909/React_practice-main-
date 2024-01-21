import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function incCount(){
        if (count<=9) {        
            setCount(count+1)
        }
    }
    function decCount(){
        if(count>0){
            setCount(count-1)
        }
    }
  
  return (
    <>
        <button onClick={decCount}>-</button>
        <div>Count is = {count}</div>
        <button onClick={incCount}>+</button>
    </>
  )
}

export default Counter