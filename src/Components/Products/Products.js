import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://damp-earth-05072.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://damp-earth-05072.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product deleted successfully");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <h1>Manage Products</h1>
      {products.map((product) => (
        <li key={product._id}>
          Name: {product.name}; Quantity: {product.quantity}; Price: {product.price}
          <br />
          <Link to={`/products/update/${product._id}`}>
          <button className="btn btn-warning me-2">Update</button>
          </Link>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </li>
      ))}
      <br />
    </div>
  );
};

export default Products;
