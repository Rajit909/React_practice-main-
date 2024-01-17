import React from 'react'
import Product from './product'

const Producttab = () => {
  let features = [
    "fast",
    "smart",
    "durable"
  ]

 
  return (
    <div className='main'>
      <h3>Prioducts</h3>
      <Product title="Phone" />
      <Product title="Laptop" price={12999} features={features }/>
      <Product title="mouse" price={299} />
    </div>
  )
}

export default Producttab
