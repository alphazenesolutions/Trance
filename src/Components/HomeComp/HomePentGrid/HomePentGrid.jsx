import React from "react";
import "./HomePentGrid.css";
import family from "../../../assests/bentoGrid.png";
import logo from "../../../assests/butterflyLogo.svg";
import review from "../../../assests/review.png";
import { FaStar } from "react-icons/fa";

const HomePentGrid = () => {
  return (
    <div>
      <div className="homePentGrid">
        <div className="bentoGrid">
          <div className="bentGrid1">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the printing and typesetting industry.
            </p>
            <img src={family} alt="" />
          </div>
          <div className="bentGrid2">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the printing and typesetting industry.
            </p>
            <div className="bentGrid2Icon">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="bentGrid3">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the printing and typesetting industry.
            </p>
            <img src={family} alt="" />
          </div>
          <div className="bentGrid4">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the printing and typesetting industry.
            </p>
            <div className="bentGrid2Icon">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="bentGrid5">
            <img src={logo} alt="" />
            <h1>Testimonials</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
          </div>
          <div className="bentGrid6">
            <div className="review">
              <img className="reviewImg1" src={review} alt="" />
              <img className="reviewImg2" src={review} alt="" />
              <img className="reviewImg3" src={review} alt="" />
              <img className="reviewImg4" src={review} alt="" />
              <img className="reviewImg5" src={review} alt="" />
              <img className="reviewImg6" src={review} alt="" />
            </div>
            <div className="border">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry the printing and typesetting industry.
              </p>
              <img src={family} alt="" />
            </div>
          </div>
          <div className="bentGrid7">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the printing and typesetting industry.
            </p>
            <div className="bentGrid2Icon">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="bentGrid8">
            {" "}
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the printing and typesetting industry.
            </p>
            <div className="bentGrid2Icon">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePentGrid;
