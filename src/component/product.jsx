// import React from 'react'

function Product({title, price=5999, features}){

  const list = features ? features.map((feature, index) => 
    <li key={index}>{feature}</li>) : null;

    let isDiscount = price > 12000;
    let styles = {
      backgroundColor: isDiscount  ? "pink": ""
    };
  return (
    <>
    <div className="container" style={styles}>
        <h1>{title}</h1>
        <p>{price}</p>

        {isDiscount ? <p>"Discount of 5%" </p> : null}

        <p>{list}</p>
       
    </div>
    </>

  )
}

export default Product
