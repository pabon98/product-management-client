import React, { useRef } from 'react';

const AddProduct = () => {
const nameRef = useRef()
const quantityRef = useRef()
const priceRef = useRef()

    const handleAddProduct = (e)=>{
      const name = nameRef.current.value
      const quantity = parseInt(quantityRef.current.value)
      const price = parseInt(priceRef.current.value)

      const newProduct ={name,quantity,price}
      fetch('https://damp-earth-05072.herokuapp.com/products',{
         method:'POST',
         headers:{
             'content-type': 'application/json'
         },
         body: JSON.stringify(newProduct)
      })
      .then(res=> res.json())
      .then(data=>{
          if(data.insertedId){
              alert('Product added successfully')
              e.target.reset()
          }
      })

        e.preventDefault()
    }
    return (
        <div>
            <h1>Please Add a Product</h1>
            <form onSubmit={handleAddProduct}>
             <input className='me-2' type="text" ref={nameRef} placeholder='Product Name'  />
             <input className='me-2' type="number" ref={quantityRef} placeholder='Product Quantity' />
             <input type="number" ref={priceRef} placeholder='Price'/>
             <br />
             <button className='btn btn-success my-2 px-3'>Submit</button>
            </form>
            <br /> <br /> <br /> <br /> <br />
        </div>
    );
};

export default AddProduct;