import React from "react";
import "./HomeGrid.css";
import gridOne from "../../../assests/gridOne.png";
import gridTwo from "../../../assests/gridTwo.png";

const HomeGrid = () => {
  return (
    <div>
      <div className="homeGrid">
        <div className="homeGridHead">
          <h1>Lorem Ipsum Text</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="gridOne">
          <div className="gridOneLeft">
            <h1>Lorem Ipsum Therapy</h1>
            <p>
              Lorem Ipsum is simply dummy of printing and typesetting industry.g
              and typesetting industry. Lorem Ipsum has been.
            </p>
            <button>Lorem Ipsum text</button>
            <img src={gridOne} alt="" />
          </div>
          <div className="gridOneRight">
            <h1>Lorem Ipsum Therapy</h1>
            <p>
              Lorem Ipsum is simply dummy of printing and typesetting industry.g
              and typesetting industry. Lorem Ipsum has been.
            </p>
            <button>Lorem Ipsum text</button>
            <img src={gridTwo} alt="" />
          </div>
        </div>
        <div className="gridTwo">
          <div className="gridTwoLeft">
            <h1>Lorem Ipsum Therapy</h1>
            <p>
              Lorem Ipsum is simply dummy of printing and typesetting industry.g
              and typesetting industry. Lorem Ipsum has been.
            </p>
            <button>Lorem Ipsum text</button>
            <img src={gridTwo} alt="" />
          </div>
          <div className="gridTwoCenter">
            <h1>Lorem Ipsum Therapy</h1>
            <p>
              Lorem Ipsum is simply dummy of printing and typesetting industry.g
              and typesetting industry. Lorem Ipsum has been.
            </p>
            <button>Lorem Ipsum text</button>
            <img src={gridOne} alt="" />
          </div>
          <div className="gridTwoRight">
            <h1>Lorem Ipsum Therapy</h1>
            <p>
              Lorem Ipsum is simply dummy of printing and typesetting industry.g
              and typesetting industry. Lorem Ipsum has been.
            </p>
            <button>Lorem Ipsum text</button>
            <img src={gridTwo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
