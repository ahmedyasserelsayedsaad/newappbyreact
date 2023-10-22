import React from 'react'
import Data from '../myData/Data'
import sh1 from '../img/products/f5.jpg';
import pa1 from '../img/products/n6.jpg'
import { useEffect, useState, useRef } from 'react'
import '../css/shop.css'
import '../css/home.css'
import { useDispatch } from 'react-redux';
import { addtocart } from '../rtk/sclices/CartSlices';
import { Link } from 'react-router-dom';
function Products() {
  const dispath=useDispatch();
  const [allData, setAllData] = useState(Data)
  const DoFilter=(category)=>{
    if(category==='all'){
      setAllData(Data);
    }else{
      const result=allData.filter((curelm)=>{
        return(
          curelm.category===category
        )
      })
      setAllData(result);
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-5 mb-5">
            <div className="heading">
              <h1>our products</h1>
              <p>Summer Collection New Modern Desgin</p>
              <p>Winter Collection and  New classic Desgin</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className=" mybtn col-lg-12 col-md-3 col-sm-6 gap-3 mb-4">

              <button className='btns' onClick={()=>setAllData(Data)}>all</button>
              <button className='btns' onClick={()=>DoFilter('pants')}>
                <img src={pa1} alt="p1" />
                pants</button>
              <button className='btns' onClick={()=>DoFilter('shirt')}>
                <img src={sh1} alt="p1" />
                shirts</button>

            </div>
          </div>
        </div>
        <div className="row mb-5 mt-4">
          {
            allData.map((product) => (
              <div className="col-lg-3 gap-3 mb-3" key={product.id}>
                <div class="card" style={{width: "17rem"}}>
                  <img src={product.image01}class="card-img-top cardimg" alt="imges"/>
                    <div class="card-body">
                      <h5 class="card-title">
                      <Link to={`/products/${product.id}`}>  {product.title} </Link>
                        </h5>
                        <div className="info">
                        <p className="card-text">{product.price}$</p>
                      <Link class="btn" onClick={()=>dispath(addtocart(product))}><i class="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                        
                    </div>
                </div>
              </div>
            ))

          }
           {
            allData.map((product) => (
              <div className="col-lg-3 gap-3 mb-3" key={product.id}>
                <div class="card" style={{width: "17rem"}}>
                  <img src={product.image01}class="card-img-top cardimg" alt="imges"/>
                    <div class="card-body">
                      <h5 class="card-title">
                      <Link to={`/products/${product.id}`}>  {product.title} </Link>
                      </h5>
                      <div className="info">
                        <p className="card-text">{product.price}$</p>
                      <Link  class="btn" onClick={()=>dispath(addtocart(product))}><i class="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                </div>
              </div>
            ))

          }
           {
            allData.map((product) => (
              <div className="col-lg-3 gap-3 mb-3" key={product.id}>
                <div class="card" style={{width: "17rem"}}>
                  <img src={product.image03}class="card-img-top cardimg" alt="imges"/>
                    <div class="card-body">
                      <h5 class="card-title"><Link to={`/products/${product.id}`}>  {product.title} </Link></h5>
                      <div className="info">
                        <p className="card-text">{product.price}$</p>
                      <Link  class="btn" onClick={()=>dispath(addtocart(product))}><i class="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                </div>
              </div>
            ))

          }
        </div>
       
      </div>
    </div>
  )
}

export default Products