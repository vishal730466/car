"use client"
import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../context'

const cart = () => {
  const obj = useContext(CountContext)
  console.log(obj)

  let total = 0;

  obj.products.map((p , i) =>{
    {total = total + p.price}
  })

  const delProduct = (p) => {
    
    const price1 = 50;
    obj.deleteProduct( p); 
  };

  return (
    <div>
   
    <h2>Iteams :</h2>
    <ul>
    total:{total}
      {obj.products.map((product, index) => (
        <li key={index}>
        
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <button onClick={()=>{delProduct(product.price)}}>del </button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default cart