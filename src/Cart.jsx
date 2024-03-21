import React, { useContext, useState } from 'react'
import { ProductsContext } from './ProductsContext'
import './Cart.css'

function Cart() {
    const data = useContext(ProductsContext)
    // console.log(data.products)

    const generateOptions = (stock) =>{
        let option = [];
        for(let i=1;i<=stock;i++){
         option.push(<option key={i} value={i}>{i}</option>);
        }
        return option;
    }
    const [quantities, setQuantities] = useState(Array(data.products.length).fill(1));
    console.log(quantities);
    const handleChange = (e, index) => {
        console.log(e.target.value)
        setQuantities(quantities.map( (quantity, i) => {
            if(i == index) {
                return e.target.value
            }
            return quantity
        }))
        console.log(quantities);
    }

    return (
        <div className='container'>
            {data.products.map((product, index) => {
                return (
                    <div className='row bg-secondary-subtle m-3'>
                        <div className='col-12 mt-3'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img src={product.thumbnail} className='thumbnail' />
                                </div>
                                <div className='col-7' >
                                    <h3>{product.title}</h3>
                                    <h6>{product.brand}</h6>
                                    <p>{product.description}</p>
                                    <p>Rating: {product.rating}</p>
                                    <p>Discount: {product.discountPercentage}</p>
                                </div>
                                <div className='col-2'>
                                    <select id={product.price} onChange={(event) =>handleChange(event, index)}>
                                        {generateOptions(product.stock)}                                    
                                    </select> <span>$ {product.price}</span>
                                    <h5 style={{ color: 'orange' }} className='mt-5'>REMOVE</h5>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-10'>
                                <h5>SUBTOTAL:</h5>
                                <h5>SHIPPING:</h5>
                            </div>
                            <div className='col-2'>
                                <p>{product.price * quantities[index]}</p>
                                <p>FREE</p>
                            </div>

                        </div>
                        <hr />
                        <div className='row'>
                            <h5 className='col-10'>TOTAL:</h5>
                            <h5 className='col-2'>{product.price * quantities[index]}</h5>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart