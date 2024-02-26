import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            <div className="productdisplay-main-img">
<img src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>209</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam animi esse dolorem pariatur repellat odio hic iusto, repudiandae quidem, laborum commodi amet debitis repellendus voluptate molestiae inventore iste itaque delectus quibusdam veniam quo ad omnis unde. Cumque saepe veniam numquam?
            </div>
            <div className="productdisplay-right-size">
                <h1>Quantity</h1>
            <div className="productdisplay-right-sizes">
                <div>100ml</div>
                <div>200ml</div>
                <div>500ml</div>
            </div>
            </div>
            
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <div className="productdiplay-right-caegory"><span>Category: <span>Pocket perfume,bottle perfume and packetperfume</span></span></div>
            <div className="productdiplay-right-caegory"><span>Tags: <span>Fragrance,Smell </span></span></div>
        
        </div>

    </div>
  )
}

export default ProductDisplay