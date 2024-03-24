import React from "react";
import "../../HomeComp/HomeBanner/HomeBanner.css";
import video from "../../../assests/Group 793.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const HomeMobileBanner = () => {
  return (
    <div className="hidden">
      <div className="homeMobileBanner sectionWidth">
        <div className="homeMobileBannerHead">
          <h1>
            HELLO AND WELCOME TO THE <span className="headSpan">TRANCE</span>
          </h1>
        </div>
        <div className="homeMobileBannerVedio">
          <img src={video} alt="" />
          <div className="pause">
            <FaPlayCircle />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className="SocialMob">
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <div className="certificate">
          <h2>We are certified & recognised by</h2>
          <div className="certificateImg">
            <img
              src="https://www.themoodspace.com/Assets/LandingPage/ISO27001CompliantLogo.png"
              alt=""
            />
            <img
              src="https://www.themoodspace.com/Assets/LandingPage/HippaCompliantLogo.png"
              alt=""
            />
            <img
              src="https://www.themoodspace.com/Assets/LandingPage/GDPR-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMobileBanner;
