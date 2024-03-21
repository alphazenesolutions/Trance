import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer sectionWidth">
        <div className="innerFooter">
          <div className="foot1">
            <h1>Visit us in Coimbatore.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
            <p>Coimbatore 000 000.</p>
          </div>
          <div className="foot2">
            <h1>Website Map</h1>
            <div className="footGrid">
              <p>Home</p>
              <p>About Us</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="foot3">
            <h1>Contact</h1>
            <div className="footGrid">
              <p>mail@trance.com</p>
              <p>IN: +91 8096 272 2100</p>
              <p>www.trance.com</p>
              <p>Lorem ipsum</p>
            </div>
          </div>
          <div className="foot4">
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <h3>© All rights reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
