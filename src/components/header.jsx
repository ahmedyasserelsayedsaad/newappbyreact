import React from 'react'
import '../css/header.css'
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const links=[
  {
    id:1,
    path:'/',
    name:'home'
  },
  {
    id:2,
    path:'/products',
    name:'shop'
  },
  {
    id:3,
    path:'/contact',
    name:'contact'
  },
  {
    id:4,
    path:'/about',
    name:'about'
  },
  {
    id:4,
    path:'/shoes',
    name:'shoes'
  },
]
function Header() {
  return (
    <div className="container">
       <Navbar expand="lg" className='navbar sticky-top'>
      <Container>
      <Link className="navbar-brand" to="/">
      <img src={logo} alt='logo' />
    </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
          {
          links.map((x)=> 
         { return(
         
          <Link  key={x.id} to={x.path}>{x.name}</Link>
       
          )})
        }
            
          </Nav>
          <div className="icon">
          <Link to='/cart'><i class="fa-solid fa-bag-shopping"></i></Link>
          <Link to='/fav'><i class="fa-solid fa-heart"></i></Link>
          <Link to='/login'><i class="fa-solid fa-user"></i></Link>
          </div>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </div>
  )
}
/*
     <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt='logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
          links.map((x)=> 
         { return(
          <li className="nav-item" key={x.id}>
          <Link className="nav-link active" aria-current="page" to={x.path}>{x.name}</Link>
        </li>
          )})
        }
       
       
        
      </ul>
    </div>
  </div>
</nav>*/
export default Header