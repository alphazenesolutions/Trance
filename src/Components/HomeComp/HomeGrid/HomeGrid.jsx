import React from "react";
import "./HomeGrid.css";

import cardOneImg from "../../../assests/gridOne.png";
import cardTwoImg from "../../../assests/gridTwo.png";
import CardOne from "../../Reusable/CardOne/CardOne";
import Heading from "../../Reusable/Heading/Heading";

const HomeGrid = () => {
  return (
    <div>
      <div className="homeGrid sectionWidth">
        <Heading />
        <div className="gridOne">
          <CardOne
            Heading="Lorem Ipsum Therapy"
            description="Lorem Ipsum is simply dummy of printing and typesetting industry.g and typesetting industry. Lorem Ipsum has been."
            button="Lorem Ipsum Text"
            descClass="cardOnePara"
            classImage="cardOneImg"
            image={cardOneImg}
          />
          <CardOne
            Heading="Lorem Ipsum Therapy"
            description="Lorem Ipsum is simply dummy of printing and typesetting industry.g and typesetting industry. Lorem Ipsum has been."
            button="Lorem Ipsum Text"
            descClass="cardOnePara"
            classImage="cardOneImg"
            image={cardTwoImg}
          />
        </div>
        <div className="gridTwo">
          <CardOne
            Heading="Lorem Ipsum Therapy"
            description="Lorem Ipsum is simply dummy of printing and typesetting industry.g and typesetting industry. Lorem Ipsum has been."
            button="Lorem Ipsum Text"
            descClass="cardOneDesc"
            classImage="cardTwoImg"
            image={cardTwoImg}
          />
          <CardOne
            Heading="Lorem Ipsum Therapy"
            description="Lorem Ipsum is simply dummy of printing and typesetting industry.g and typesetting industry. Lorem Ipsum has been."
            button="Lorem Ipsum Text"
            descClass="cardOneDesc"
            classImage="cardTwoImg"
            image={cardTwoImg}
          />
          <CardOne
            Heading="Lorem Ipsum Therapy"
            description="Lorem Ipsum is simply dummy of printing and typesetting industry.g and typesetting industry. Lorem Ipsum has been."
            button="Lorem Ipsum Text"
            descClass="cardOneDesc"
            classImage="cardTwoImg"
            image={cardTwoImg}
          />

          {/* <div className="gridTwoLeft">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
