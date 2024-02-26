import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';
import axios from 'axios';

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await axios.get('http://localhost:4000/allproduct');
      const data = response.data;
      setAllproducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await axios.post('http://localhost:4000/removeproduct', { id: id });
      fetchInfo(); // Fetch updated product list after removal
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproducts-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div key={index} className="listproduct-format">
            <img className='listproduct-product-image' src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img 
              className='listproduct-remove-icon' 
              src={cross_icon} 
              alt="Remove"
              onClick={() => removeProduct(product.id)} // Add onClick handler to remove product
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
