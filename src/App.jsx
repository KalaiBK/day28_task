import { useState, useEffect, useContext } from 'react'
import products from './assets/product.json'
import { ProductsContext } from './ProductsContext'
import Cart from './Cart'

function App() {
  const data = JSON.parse(JSON.stringify(products));
  return (
    <ProductsContext.Provider value={data}>
      <Cart/>
    </ProductsContext.Provider>
  )
}

export default App

