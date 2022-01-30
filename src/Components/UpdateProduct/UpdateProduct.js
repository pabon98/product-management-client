import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const{id} = useParams()
    const [product, setProduct] = useState({})
    useEffect( ()=>{
        fetch(`https://damp-earth-05072.herokuapp.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[id])
    const handleNameChange =(e)=>{
        const updatedName = e.target.value
        const updatedProductName ={name: updatedName, quantity: product.quantity, price: product.price}
        setProduct(updatedProductName)
    }
    const handleQuantityChange = (e)=>{
    const updatedQuantity = e.target.value
    const UpdatedProductQuantity = {name: product.name, quantity: updatedQuantity, price: product.price}
    setProduct(UpdatedProductQuantity)
    }
    const handlePriceChange =(e)=>{
        const updatedPrice = e.target.value
        const UpdatedProductPrice = {name: product.name, quantity: product.quantity, price: updatedPrice}
        setProduct(UpdatedProductPrice)
    }
    
    const handleUpdateProduct = (e)=>{
         fetch(`https://damp-earth-05072.herokuapp.com/products/${id}`,{
           method:"PUT",
           headers:{
               'content-type':'application/json'
           },
           body: JSON.stringify(product)
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.modifiedCount>0){
                 alert('Product Updated Successfully')
                 setProduct({})
             }
         })

        e.preventDefault()
    }
    return (
        <div>
            <h1> Update {product.name}</h1>
            <span><p>{id}</p></span>
            <form onSubmit={handleUpdateProduct}>
            <input type="text" onChange={handleNameChange} value={product.name || ''} placeholder='Product Name' />
            <input type="number" onChange={handleQuantityChange} value={product.quantity || ''}  placeholder='Product Quantity' />
            <input type="number" onChange={handlePriceChange} value={product.price || ''} name="" id="" placeholder='Product Price' />
            <br />
            <button className='btn btn-dark mt-1'>Submit</button>
            </form>
        </div>
    );
};

export default UpdateProduct;