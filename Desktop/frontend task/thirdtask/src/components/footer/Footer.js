import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";

import { BsBagDashFill } from "react-icons/bs";




function Footer() {
  return (
    <footer class="footer mt-auto py-3 bg-dark text-white pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h5>About Us</h5>
            <p>Our values</p>
            <p>Privacy policy</p>
            <p>Terms & conditions</p>
            <p>Disclaimer</p>
            <p>Corporate Information</p>
          </div>
          <div class="col-md-3">
            <h5>Quick Links</h5>
            <p>Knowledge</p>
            <p>FAQs</p>
            <p>Return & refund policy</p>
            <p>Track order</p>
            <p>Download App</p>
          </div>
          <div class="col-md-3">
            <h5>What Us</h5>
            <p>Our values</p>
            <p>Privacy policy</p>
            <p>Terms & conditions</p>
            <p>Disclaimer</p>
            <p>Corporate Information</p>
          </div>
          <div class="col-md-3">
            <h5>Contact Us</h5>
            <p>
              Need help fast? Fill out our form or email help@beminimalist.co
            </p>
            <p>
              <span>
                <FaInstagram />
              </span>
              <span className="px-2">
                <FaSquareFacebook />
              </span>
              <span className="px-2">
                <IoIosMailOpen />
              </span>
              <span>
              <FiYoutube />

              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="fixed-cart" style={{ position: 'fixed', bottom: '10px', left: '10px' }}>
  <button type="button" className="btn btn-dark position-relative p-3"><BsBagDashFill /> Offers
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      19+
      <span className="visually-hidden">unread messages</span>
    </span>
  </button>
</div>

      
    </footer>
  );
}

const styles = {};

export default Footer;
