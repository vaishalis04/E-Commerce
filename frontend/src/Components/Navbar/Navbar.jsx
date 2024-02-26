import React, { useState } from 'react'
import './Navbar.css'
// import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import per_logo from '../Assets/new.png'



const Navbar = () => {
  const [menu,setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
    <div className='nav-logo'>
      <img src={per_logo} alt="" />
      <p>Aroma</p>
</div>
      <ul className='nav-menu'>
<li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
<li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu === "men"?<hr/>:<></>}</li>
<li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu === "women"?<hr/>:<></>}</li>


</ul>
<div>
  {localStorage.getItem('auth-token') ? (
    <>
      <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">{getTotalCartItems()}</div>
    </>
  ) : (
    <Link to='/login'><button>Login</button></Link>
  )}
</div>

    </div>
  )
}

export default Navbar