import React from 'react'

const Product = ({title, price}) => {
  return (
    <>
    <div className="container">
        <h1>{title}</h1>
        <p>{price}</p>
    </div>
    </>
  )
}

export default Product
