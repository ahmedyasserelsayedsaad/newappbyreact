import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Products from '../pages/products'
import ProductsDet from '../pages/productsDet'
import Contact from '../pages/contact'
import Cart from '../pages/cart'
import Fav from'../pages/fav'
import Login from '../pages/login'
import Shoes from '../pages/Shoes'
import ShoesDt from '../pages/ShoesDt'
function RouteRS() {
  return (
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<ProductsDet/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/shoes' element={<Shoes />}/>
    <Route path='/shoes/:id' element={<ShoesDt/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/fav' element={<Fav/>}/>
    <Route path='/login' element={<Login/>}/>
    
</Routes>
  )
}

export default RouteRS;