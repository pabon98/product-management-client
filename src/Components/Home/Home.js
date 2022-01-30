import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const[products, setProducts] = useState([])
    useEffect( ()=>{
        fetch('https://damp-earth-05072.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className='container'>
            <h1>Our Products</h1>
            <div className="row gy-3 my-2">
                {
                   products.map((product) => (
                    <div className="col-md-4">
                      <Product key={product._id} product={product}></Product>
                    </div>
                  ))}
                
            </div>
        </div>
    );
};

export default Home;