import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section>
          <h2>Company</h2>

          <ul>
            <li>
              <Link className="footer-link">About Us</Link>
            </li>
            <li>
              <Link className="footer-link">Our Services</Link>
            </li>
            <li>
              <Link className="footer-link">Privacy Policy</Link>
            </li>
            <li>
              <Link className="footer-link">Affiliate Program</Link>
            </li>
          </ul>
          
        </section>

        <section>
          <h2>Get Help</h2>
          <ul>
            <li>
              <Link className="footer-link">FAQ</Link>
            </li>
            <li>
              <Link className="footer-link">Shipping</Link>
            </li>
            <li>
              <Link className="footer-link">Returns</Link>
            </li>
            <li>
              <Link className="footer-link">Order Status</Link>
            </li>
            <li>
              <Link className="footer-link">Payment Options</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Online Shop</h2>
          <ul>
            <li>
              <Link className="footer-link">Watch</Link>
            </li>
            <li>
              <Link className="footer-link">Bag</Link>
            </li>
            <li>
              <Link className="footer-link">Shoes</Link>
            </li>
            <li>
              <Link className="footer-link">Dress</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Follow Us</h2>
          
          <ul className="socials">
            <li>
              <Link to='https://facebook.com' target="_blank" className="social-link"><FontAwesomeIcon icon={faFacebook} /></Link>
            </li>
            <li>
              <Link to='https://twitter.com' target="_blank" className="social-link"><FontAwesomeIcon icon={faTwitter} /></Link>
            </li>
            <li>
              <Link to='https://github.com' target="_blank" className="social-link"><FontAwesomeIcon icon={faGithub} /></Link>
            </li>
            <li>
              <Link to='https://linkedin.com' target="_blank" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
