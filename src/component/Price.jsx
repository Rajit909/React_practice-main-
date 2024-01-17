import React from 'react'

export default function Price({oldPrice, newPrice}) {
  return (
   <>
   <div className='price-main'>
        <strike>{oldPrice}</strike>
        <span>{newPrice}</span>
   </div>
   </>
  )
}
