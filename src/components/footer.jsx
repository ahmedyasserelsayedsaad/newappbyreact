import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import pay1 from "../img/pay/pay.png"
import app from "../img/pay/app.jpg"
import play from "../img/pay/play.jpg"
import "../css/footer.css"
function Footer() {
  return (
    <div>
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="info">
                <Link><img src={logo} alt='logo' /></Link>
                <div className="contact">
                  <h5>contact us</h5>
                  <h5><i class="fa-solid fa-location-dot"></i> mit-ghamr - egypt</h5>
                  <h6><i class="fa-solid fa-phone"></i> 01014567381</h6>
                  <div className="social">
                    <Link><i class="fa-brands fa-facebook"></i></Link>
                    <Link><i class="fa-brands fa-instagram"></i></Link>
                    <Link><i class="fa-brands fa-twitter"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="info">

                <div className="contact">
                  <h2>About</h2>
                  <h6>about us</h6>
                  <h6>Delivery is fast</h6>
                  <h6>privacy policy</h6>
                  <h6>Terms & condtion</h6>
                  <h6>contact us</h6>
                  <h6> your welcom</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="info">
                <div className="contact">
                  <h2>My Accounts</h2>
                  <h6>Sign in</h6>
                  <h6>view cart</h6>
                  <h6>My wallet</h6>
                  <h6>Track my order </h6>
                  <h6>Help</h6>
                </div>

              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="info">
                <div className="contact">
                  <h2>install app</h2>
                  <h6>from App store or google play</h6>
                  <div class="pay">
                    <img src={pay1} alt='pay' />
                    <img src={app} alt='app' />
                  </div>
                  <h6>secure payment ever</h6>
                  <img src={play} alt='play' />
                </div>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
            <h4 class="h44">Copy rights@ahmed yasser</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;