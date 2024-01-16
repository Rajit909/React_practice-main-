import React from 'react'
import Product from './product'

const Producttab = () => {
  return (
    <div className='main'>
      <h3>Prioducts</h3>
      <Product title="Title" price="30"/>
      <Product title="Title" price="50"/>
      <Product title="Title" price="60"/>
    </div>
  )
}

export default Producttab
