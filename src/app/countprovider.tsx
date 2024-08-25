"use client"

import React, { useState , useEffect } from 'react'
import { CountContext } from './context';

const Countprovider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

      const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });


  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

    const addProduct = (productName: any, productPrice: any) => {
      const newProduct = { name: productName, price: productPrice };
      setProducts([...products, newProduct]);
    };

    const deleteProduct = (price: any) => {
      const updatedProducts = products.filter((product: { price: any; }) => product.price !== price);
      
      console.log("del is running " )
      setProducts(updatedProducts);
    };

  
     
  return (
    <div>
        <CountContext.Provider value={{products, setProducts ,addProduct,deleteProduct }}>

        {children}
      
        </CountContext.Provider>
        </div>
  )
}

export default Countprovider