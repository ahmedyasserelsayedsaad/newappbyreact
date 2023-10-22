import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import '../css/contact.css'

function Login() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5 mb-3">
          <div className="col-lg-12">
            <h4 className='text-center fw-bold'> welcome to <span style={{ color: '#088178' }}>MEGA STOR</span>Website</h4>
          </div>
          <div className="logform mt-4 mb-4 d-block justify-content-center  align-items-center mx-auto" style={{width:'500px'}}>
          <button className='con-btn mb-2 fw-bold' style={{ width: '100%' }}>
          <i class="fa-brands fa-google" style={{backgroundColor:'#4285f4',padding:'7px',borderRadius:'50%'}}></i>  login with Google
          </button>
          <Form>
            <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: '#088178',fontWeight:'bold' }}>Email address <i class="fa-solid fa-user" style={{paddingLeft:'7px'}}></i></Form.Label>
              <Form.Control type="email" placeholder="name@example.com" style={{ borderBottom: '2px solid #088178', outline: 'none' }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: '#088178',fontWeight:'bold' }}>password <i class="fa-solid fa-lock" style={{paddingLeft:'7px'}}></i></Form.Label>
              <Form.Control type="password" placeholder="password" style={{ borderBottom: '2px solid #088178', outline: 'none' }} />
            </Form.Group>
          </Form>
          <button type="submit" class="con-btn px-5 w-100 mt-2 fw-bold">login </button>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Login