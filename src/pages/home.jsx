import React, { useEffect } from 'react'
import home from "../img/hero4.png"
import b7 from '../img/banner/b7.jpg'
import b4 from '../img/banner/b4.jpg'
import b18 from '../img/banner/b18.jpg'
import "../css/home.css"
import feat1 from "../img/features/f1.png";
import feat2 from "../img/features/f2.png";
import feat3 from "../img/features/f3.png";
import feat4 from "../img/features/f4.png";
import feat5 from "../img/features/f5.png";
import feat6 from "../img/features/f6.png";
import { Link } from 'react-router-dom'
import Data from "../myData/Data";
import { useState } from 'react';
import ProductCard from './ProductCard';

//import FeaturedPro from '../components/featuredPro'
const features = [
  {
    id: 1,
    src: feat1,
    text: 'free shopping',
  },
  {
    id: 2,
    src: feat2,
    text: 'online order',
  },
  {
    id: 3,
    src: feat3,
    text: 'save money',
  },
  {
    id: 4,
    src: feat4,
    text: 'promotions',
  },
  {
    id: 5,
    src: feat5,
    text: 'happy sell',
  },
  {
    id: 6,
    src: feat6,
    text: 'f24/11 support',
  },
]
function Home() {

  const [allData, SetAllData] = useState(Data)
  const [newShirt, SetNewShirt] = useState([]);
  useEffect(() => {
    const filterdShirts = allData.filter((pro) => pro.category === 'shirt');
    const shirtSclice = filterdShirts.slice(0, 6);
    SetNewShirt(shirtSclice);
  }, [])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="home">
              <img src={home} alt="home" />
              <div class="ah">
                <h4>Trade-in-offer</h4>
                <h2>Super value dealse</h2>
                <h1>On all products</h1>
                <p>save more with coupons & up to 70% off!</p>
                <Link to='/products' class="btn1">Shop Now</Link>
               
              </div>
            </div>
          </div>
        </div>


        <div className="row">

          {
            features.map((v) => {
              return (
                <div className="col-lg-2 col-md-4 col-sm-6 mt-5 mb-5 pt-5 myfee" key={v.id}>

                  <img src={v.src} alt="f" srcset="" />
                  <h6>{v.text}</h6>
                </div>

              )
            })
          }



        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="heading">
              <h1>features products</h1>
              <p>Summer Collection New Modern Desgin</p>
            </div>

          </div>
          <div className="row summer">
            {
              allData.map((product) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6 gap-3  mb-5 ccc">
                    <ProductCard product={product} />
                  </div>
                )
              })
            }

          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 banner">
            <div class="ban">
              <h4>Repair Services</h4>
              <h2>Up to 70% off-All t-shirts&Accessories</h2>
              <Link to='/products' class="btn2">Explore More</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <div className="heading">
              <h1>NEW Arrival</h1>
              <p>Summer Collection New Modern Desgin</p>
            </div>
          </div>
        </div>
        <div className="row">
          {
            newShirt.map((product) => (
              <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                <ProductCard product={product} />
              </div>
            )

            )
          }
        </div>
        <div className="row mb-5 gap-3">
          <div className="col-lg-6 new">
            <div class="bb">
              <h4>CRAZY DEALS</h4>
              <h1>buy 1 get 1 free</h1>
              <p>the best classic dress is in solos cotro</p>
              <Link to='/about' class="btn2">Learn More</Link>
            </div>
          </div>
          <div className="col-lg 6 new2">
            <div class="bb">
              <h4>CRAZY DEALS</h4>
              <h1>buy 1 get 1 free</h1>
              <p>the best classic dress is in solos cotro</p>
              <Link to='/about' class="btn2">Learn More</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-3 new3 ">
              <img src={b7} alt="b7" />
              <div className="bbc">
                <h1>seasonal sale</h1>
                <h3>winter Collection sale off 50%!</h3>
              </div>
            </div>
            <div className="col-lg-4 mb-3 new4">
              <img src={b4} alt="b7" />
              <div className="bbc">
                <h1>seasonal sale</h1>
                <h3>winter Collection sale off 50%!</h3>
              </div>
            </div>
            <div className="col-lg-4 mb-3 new5">
              <img src={b18} alt="b7" />
              <div className="bbc">
                <h1>seasonal sale</h1>
                <h3>winter Collection sale off 50%!</h3>
              </div>
            </div>
          </div>
          <div className="row mt-5 bvb">
           
            <div className="col-lg-7 col-md-6 col-sm-6">
              <div class="new-text">
                <h3>Sign up for newsletter</h3>
                <p>Get E-mail updates about our lastes shop and <span>special offers</span></p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 ">
              <div class="inp">
                <input type="email" placeholder="enter your e-mail please"/>
                  <button type="submit" class="btn4">Sign Up</button>
              </div>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home