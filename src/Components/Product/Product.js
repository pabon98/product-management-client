import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const{name,quantity,price} = product
    return (
        <div className='ms-4'>
            <div class="card" style={{"width": "18rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Price {price}</p>
    <p class="card-text">Quantity {quantity}</p>
    <Link to={`/products/update/${product._id}`}>
        <button className='btn btn-warning'>Update</button>
    </Link>
  </div>
</div>
<br /> <br />
        </div>
    );
};

export default Product;