import React from 'react'
import '../css/home.css'
import a1 from '../img/about/a1.png'
import a2 from '../img/about/a2.jpg'
import a3 from '../img/about/a3.png';
import a4 from '../img/about/a4.png'
import a5 from '../img/about/a5.jpg'
import a6 from '../img/about/a6.jpg'
import abanner from '../img/about/banner.png'
import bbutton from '../img/button.png'
import '../css/about.css'
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5 mb-4">
          <div className="col-lg-12">
          <div className="heading">
            <h1>about megaStore</h1>
            <p>Summer Collection New Modern Desgin</p>
            <p>Winter Collection and  New classic Desgin</p>
          </div>
          </div>
          
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 col-md-6 ">
            <img className ='ab1' src={a1} alt="a1" style={{width:'330px', height:'330px',borderRadius:'20px'}} />
          </div>
          <div className="col-lg-6 col-md-6  pt-5">
            <div className="info">
              <h2 style={{fontSize:'35px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}} >megastore</h2>
              <h5 style={{fontSize:'20px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>in mega store you will explor what you want by easy way</h5>
              <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque repellendus natus ab vel optio impedit accusamus fuga vero nam, veniam aspernatur dolores quam voluptatum recusandae minus fugit id corrupti.</p>
              <Link to='/products' className='btn1'>clothes <i class="fa-solid fa-arrow-right"></i></Link>
              <Link to='/shoes' className='btn1'>shoes <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          
          <div className="col-lg-6 col-md-6  pt-5">
            <div className="info">
              <h2 style={{fontSize:'35px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>megastore</h2>
              <h5 style={{fontSize:'20px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>in mega store you can buy smart trch also ..!</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque repellendus natus ab vel optio impedit accusamus fuga vero nam, veniam aspernatur dolores quam voluptatum recusandae minus fugit id corrupti.</p>
              <Link to='/products' className='btn1'>clothes <i class="fa-solid fa-arrow-right"></i></Link>
              <Link to='/shoes' className='btn1'>shoes <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 ">
            <img className ='ab1' src={a2} alt="a1" style={{width:'300px', height:'300px'}} />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 col-md-6 ">
            <img className ='ab1' src={a3} alt="a1" style={{width:'300px', height:'300px'}} />
          </div>
          <div className="col-lg-6 col-md-6  pt-5">
            <div className="info">
              <h2 style={{fontSize:'35px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>megastore</h2>
              <h5 style={{fontSize:'20px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>in mega store you will buy your smart brand by easy way</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque repellendus natus ab vel optio impedit accusamus fuga vero nam, veniam aspernatur dolores quam voluptatum recusandae minus fugit id corrupti.</p>
              <Link to='/products' className='btn1'>clothes <i class="fa-solid fa-arrow-right"></i></Link>
              <Link to='/shoes' className='btn1'>shoes <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="row mb-5">
        
          <div className="col-lg-6 col-md-6  pt-5">
            <div className="info">
              <h2 style={{fontSize:'35px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>megastore</h2>
              <h5 style={{fontSize:'20px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>in mega store you will find you different brands</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque repellendus natus ab vel optio impedit accusamus fuga vero nam, veniam aspernatur dolores quam voluptatum recusandae minus fugit id corrupti.</p>
              <Link to='/products' className='btn1'>clothes <i class="fa-solid fa-arrow-right"></i></Link>
              <Link to='/shoes' className='btn1'>shoes <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 ">
            <img className ='ab1' src={a4} alt="a1" style={{width:'300px', height:'300px'}} />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 col-md-6">
            <img className ='ab1' src={a5} alt="a1" style={{width:'330px', height:'330px',borderRadius:'20px'}} />
          </div>
          <div className="col-lg-6 col-md-6 pt-5">
            <div className="info">
              <h2 style={{fontSize:'35px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>megastore</h2>
              <h5 style={{fontSize:'20px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>in mega store you will buy many things by easy way</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque repellendus natus ab vel optio impedit accusamus fuga vero nam, veniam aspernatur dolores quam voluptatum recusandae minus fugit id corrupti.</p>
              <Link to='/products' className='btn1'>clothes <i class="fa-solid fa-arrow-right"></i></Link>
              <Link to='/shoes' className='btn1'>shoes <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="row mb-5">
         
          <div className="col-lg-6 col-md-6  pt-5">
            <div className="info">
              <h2 style={{fontSize:'35px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>megastore</h2>
              <h5 style={{fontSize:'20px',fontWeight:'700',letterSpacing:'1px',color:'#088178',textTransform:'capitalize'}}>in mega store you will buy your brand by safe way</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque repellendus natus ab vel optio impedit accusamus fuga vero nam, veniam aspernatur dolores quam voluptatum recusandae minus fugit id corrupti.</p>
              <Link to='/products' className='btn1'>clothes <i class="fa-solid fa-arrow-right"></i></Link>
              <Link to='/shoes' className='btn1'>shoes <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 ">
            <img className ='ab1' src={a6} alt="a1" style={{width:'300px', height:'300px'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About