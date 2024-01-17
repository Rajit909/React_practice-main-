// import React from 'react'

function Product({title, price=5999, features}){

  // const list = features ? features.map((feature, index) => 
  //   <li key={index}>{feature}</li>) : null;

   
  return (
    <>
    <div className="container">
    <h3>{title}</h3>
    </div>
    </>

  )
}

export default Product
