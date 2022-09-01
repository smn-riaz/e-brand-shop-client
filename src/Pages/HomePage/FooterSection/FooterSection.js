import React from "react";
import { Link } from "react-router-dom";
import "./FooterSection.css";
import facebook from '../../../Assets/facebook.png'
import instagram from '../../../Assets/instagram.png'
import twitter from '../../../Assets/twitter.png'
import youtube from '../../../Assets/youtube.png'


function FooterSection() {
  return (
    <footer className="footerSection">
      <div className="row footer-link-container">
        <div className="col-lg-3 py-2  align-self-center">
          <Link to="/" className="navbar-brand">
            <h3 className="shop-name">E-BRAND SHOP</h3>
          </Link>
        </div>



        <div className="col-lg-3 text-center py-2">
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="footer-link">
                Privacy Policy &middot;
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Cookie Policy &middot;
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Read FAQ &middot;
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Terms of Use &middot;
              </Link>
            </li>
          </ul>
        </div>



        <div className="col-lg-3 px-4 py-2">
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="footer-link">
                {" "}
               <img src={facebook} height="27" alt="" /> Facebook
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
              <img src={instagram} height="27" alt="" /> Instagram
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                <img src={youtube} height="27" alt="" /> YouTube
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                <img src={twitter} height="27" alt="" /> Twitter
              </Link>
            </li>
          </ul>
        </div>

     

        <div className="col-lg-2 py-2">
          <ul className="list-unstyled">
            <li className="footer-link">vromon-tour@gmail.com</li>
            <li className="footer-link">0000000000</li>
            <li className="footer-link">California, USA</li>
          </ul>
        </div>
      </div>
      <div className="row footer-bottom pt-3 px-3">
        <div className="col-12">
          <p className="text-center py-1">
            © {new Date().getFullYear()} <b><a href="e-brand" className="text-decoration-none text-dark">e-brand-shop.web.app</a></b>
            <br />
            All rights reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
