import React from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'
import { useDispatch,useSelector } from 'react-redux'
import { addtocart } from '../rtk/sclices/CartSlices'
function ProductCard(props) {
  const dispatch=useDispatch();
    const {title,id,price,image01}=props.product
  return (
    <div>
        <div className="container">
        <div class="card mt-5 align-items-center gap-3" style={{width:"15rem"}}>
                   
                   <img src={image01} class="card-img-top cardimg" alt="imges"/>
                  
                       <div class="card-body">
                           <h5 class="card-title">
                               <Link to={`/products/${id}`}>{title}</Link>
                               
                           </h5>
                           <div className="info">
                           <p class="card-text">${price}</p>
                           <button  class="btn" onClick={()=>dispatch(addtocart(props.product))}><i class="fa-solid fa-cart-shopping"></i></button>
                           </div>
                           
                       </div>
               </div>
        </div>
    </div>
  )
}

export default ProductCard