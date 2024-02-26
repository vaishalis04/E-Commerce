import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Shop from './Pages/Shop'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import Cart from './Pages/Cart'
import Login from './Pages/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
<Route path='/product' element={<Product/>}>
<Route path=':productId' element={<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/login' element={<Login/>}></Route>
</Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App