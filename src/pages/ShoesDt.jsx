import React from 'react'
import SHData from '../myData/SHData'
import '../css/detiles.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import '../css/home.css'
import { Col } from 'react-bootstrap'
function ShoesDt() {
 const proid=useParams();
 const productdetiles=SHData.filter((pro)=>pro.id==proid.id);
 const product=productdetiles[0];
 const[previewImg,setPreviewImg]=useState(product.image01)
 const [adding,setAdding]=useState('adding to cart')
 const addings=()=>{
  if(adding==='adding to cart'){
    setAdding('remove from cart')
  }else{
    setAdding('adding to cart')
  }
 }
  return (
    <>
    <div className="container">
    <div className="row mt-5 mb-3">
          <div className="col-lg-12">
            <div className="heading">
              <h1>shoes detiles</h1>
              <p>creative Collection New Modern Desgin</p>
              <p>different Collection and  New classic Desgin</p>
            </div>
          </div>
        </div>
        <div className="row">
          <Col lg='2' md='2'>
            <div className="product-imge">
              <div className="item-img" onClick={()=>setPreviewImg(product.image01)}>
              <img src={product.image01} alt='imge' className='w-50'/>
              </div>
              <div className="item-img" onClick={()=>setPreviewImg(product.image02)}>
              <img src={product.image02} alt='imge' className='w-50'/>
              </div>
              <div className="item-img" onClick={()=>setPreviewImg(product.image03)}>
              <img src={product.image03} alt='imge' className='w-50'/>
              </div>
            </div>
          </Col>
          <div className="col-lg-4 col-md-4 mb-4">
            <img src={previewImg} alt="imge" className='w-100 mainim' />
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
          <h2 style={{color:'#088178',textTransform:'capitalize',fontWeight:'bolder'}}>{product.title}</h2>
          <div className="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <h5 style={{color:'#088178',textTransform:'capitalize',fontWeight:'bolder'}}>{product.category}</h5>
          <h5 style={{color:'gray',textTransform:'capitalize',fontWeight:'bolder'}}>{product.price}$</h5>
          <p style={{color:'gray',fontWeight:'600'}}>{product.desc}</p>
          <button className="btnc" onClick={()=>addings()}>{adding}</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default ShoesDt