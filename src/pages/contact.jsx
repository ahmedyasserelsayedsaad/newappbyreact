import React from 'react'
import f1 from '../img/contactus.jpg'
import '../css/contact.css'
import { Link } from 'react-router-dom'
import '../css/home.css'
import { Col } from 'react-bootstrap'
function Contact() {
  return (
    <div>
      <div className="container">
      <div className="row mt-5 mb-3">
          <div className="col-lg-12">
            <div className="heading">
              <h1>contact us</h1>
              <p>Summer Collection New Modern Desgin</p>
              <p>Winter Collection and  New classic Desgin</p>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6">
            <h1 style={{color:'#088178',fontWeight:'bold'}}>contact with me on </h1>
            <h3 style={{color:'#088178',fontWeight:'bold'}}>social media accounts</h3>
          </div>
          <Col>
         <h2 style={{color:'gray',fontWeight:'bold',fontSize:'90px'}}><i class="fa-solid fa-arrow-right"></i></h2> 
          </Col>
          <Col lg='2' md='2'>
            <div className="links align-items-center text-align-center">
              <div className="face-item">
              
                <Link className='btnf' to='https://www.facebook.com/aboyassersaad/'>
                  <i class="fa-brands fa-facebook"></i>
                  <p>facebook</p>
                  </Link>
                
              </div>
              <div className="face-item">
            
                <Link className='btni' to='https://www.instagram.com/ahmedyasser__99'>
                  <i class="fa-brands fa-instagram"></i>
                  <p>instagram</p>
                  </Link>
              </div>
              <div className="face-item">
              
                <Link className='btnt' to='https://twitter.com/AhmedYa07409852'>
                <i class="fa-brands fa-x-twitter"></i>
                  <p>twitter</p>
                  </Link>
                 
              </div>
              <div className="face-item">
             
                <Link className='btnl' to='https://www.linkedin.com/in/ahmed-yasser-saad-0a20b7251/'>
                  <i class="fa-brands fa-linkedin"></i>
                  <p>linkedin</p>
                  </Link>
                  
              </div>
            </div>
          </Col>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
           <img src={f1} alt="contact us" style={{width:'400px',height:'400px'}} />
          </div>
          <div className="col-lg-6 col-md-6">
          <form >
              <div class="mb-3">
                <label for="exampleForm" class="form-label "style={{ color: '#088178', fontWeight:'500',fontSize:'24px' }}>your name</label>
                <input type="email" class="form-control" id="exampleForm" placeholder="ahmed yasser" 
                style={{outline:'none',borderBottom:'3px solid #088178'}} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"style={{ color: '#088178', fontWeight:'500',fontSize:'24px' }}>Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                style={{outline:'none',borderBottom:'3px solid #088178'}} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"style={{ color: '#088178', fontWeight:'500',fontSize:'24px' }}>your message box</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                style={{outline:'none',borderBottom:'3px solid #088178'}}></textarea>
              </div>
              
              <button type="submit" class="con-btn px-5">send message </button>
            </form>
            <h6 className='mylink mt-4'>please, login first to see your message <span style={{color:'#088178'}}>
             <Link to='/login'> login </Link> </span>
              </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

/*
<div className="links d-flex justify-content-center" style={{backgroundColor:'#088178',borderRadius:'10px'}}>

              <button className='btns'><Link to='https://www.instagram.com/ahmedyasser__99'><i class="fa-brands fa-instagram"></i></Link></button>
              <button className='btns'><Link to='https://twitter.com/AhmedYa07409852'><i class="fa-brands fa-twitter"></i></Link></button>
              <button className='btns'><Link to='https://www.linkedin.com/in/ahmed-yasser-saad-0a20b7251/'><i class="fa-brands fa-linkedin"></i></Link></button>
            </div>*/