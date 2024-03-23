import React from "react";
import "./HomeBanner.css";
import video from "../../../assests/Group 793.png";
import play from "../../../assests/play.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <div>
      <div className="homebanner">
        <div className="homebannerFlex">
          <div className="homebannerFlexLeft">
            <div className="homebannerFlexLeftInner">
              <div className="homebannerFlexLeftHead">
                <h1>
                  HELLO AND WELCOME TO THE{" "}
                  <span className="headSpan">TRANCE</span>
                </h1>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
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
              <div className="homebannerFlexLeftFooter">
                <div className="homebannerFlexLeftFoot">
                  <h5>Lorem Ipsum</h5>
                  <h6>Lorem Ipsum is simply dummy text of the printing.</h6>
                </div>
                <div className="homebannerFlexLeftFoot">
                  <h5>Lorem Ipsum</h5>
                  <h6>Lorem Ipsum is simply dummy text of the printing.</h6>
                </div>
                <div className="homebannerFlexLeftFoot">
                  <h5>Lorem Ipsum</h5>
                  <h6>Lorem Ipsum is simply dummy text of the printing.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="homebannerFlexRight">
            <div className="homebannerFlexRightImg">
              <img src={video} alt="" />
              <div className="pause">
                <FaPlayCircle />
              </div>
              <div className="bannerShade"></div>
            </div>
            <div className="Social">
              <FaFacebookF />
              <FaYoutube />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
