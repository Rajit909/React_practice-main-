import React from 'react'
import Price from './Price'

function Product({title, price=5999, features}){

  // const list = features ? features.map((feature, index) => 
  //   <li key={index}>{feature}</li>) : null;

   
  return (
    <>
    <div className="card">
      <div className="head">

    <h3>{title}</h3>
      </div>
    <div className="price">
     <Price oldPrice={5999} newPrice={4999}/>
    </div>
    </div>
    </>

  )
}

export default Product
