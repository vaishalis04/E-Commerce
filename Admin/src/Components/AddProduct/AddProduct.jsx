import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import axios from 'axios'



const AddProduct = () => {
    const[image,setImage] = useState(false)
    const[ProductDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandler = (e)=>{
        setImage(e.target.files[0])
    }
    const changeHandler =(e)=>{
        setProductDetails({...ProductDetails,[e.target.name]:e.target.value})
    }
    const Add_Product = async () => {
        try {
            console.log(ProductDetails);

            const formData = new FormData();
            formData.append('product', image);

            const uploadResponse = await axios.post('http://localhost:4000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (!uploadResponse.data.success) {
                throw new Error('Upload failed');
            }

            const product = { ...ProductDetails, image: uploadResponse.data.image_url };

            console.log(product);

            const addProductResponse = await axios.post('http://localhost:4000/addproduct', product);

            if (!addProductResponse.data.success) {
                throw new Error('Failed to add product');
            }

            alert('Product added');
        } catch (error) {
            console.error('Error:', error.message);
            alert('An error occurred while adding the product');
        }
    }
  return (
    <div className='addproduct'>
    <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={ProductDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here..' />
    </div>
    <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={ProductDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='type here' />
        </div>

        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={ProductDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='type here' />
        </div>
    </div>
    <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={ProductDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
            <option value="women">Women</option>
            <option value="men">men</option>
        </select>
    </div>
    <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-image' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
    </div>
    <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
</div>  )
}

export default AddProduct