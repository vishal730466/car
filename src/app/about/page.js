"use client"
import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../context'

const about = () => {
  const obj = useContext(CountContext)
  console.log(obj)

  const handleAddProduct = () => {
    const product1 = "my product";
    const price1 = Math.floor(Math.random()*100+1)
    obj.addProduct(product1 , price1); // Example values, you can replace with actual product details
  };

  const delProduct = () => {
    const product1 = "my product";
    const price1 = 50;
    obj.deleteProduct( price1); // Example values, you can replace with actual product details
  };
  
  return (
    <div>
    <button onClick={handleAddProduct}>Add Product</button>
    <button onClick={delProduct}>del Product</button>
    <h2>Products:</h2>
    <ul>
      {obj.products.map((product, index) => (
        <li key={index}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default about