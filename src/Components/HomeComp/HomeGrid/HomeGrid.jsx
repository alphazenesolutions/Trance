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
        <Heading
          Head="Personalized Therapy Services Just For You"
          desc="“Unlock your potential with our tailored therapy services. Our compassionate counselors provide personalized support, guiding you through lifes challenges and transition. Whether it’s improving relationships or navigating personal growth, were here to empower you on your journey to greater well-being.”"
        />
        <div className="gridOne">
          <CardOne
            Heading="Individual therapy"
            description="Provides individualized help and direction to explore feelings, manage mental health issues, and create a support system in a private and encouraging setting."
            button="Lorem Ipsum Text"
            descClass="cardOnePara"
            classImage="cardOneImg"
            image={cardOneImg}
          />
          <CardOne
            Heading="Couple therapy"
            description="Improve communication, settle arguments, and create greater connections in your relationship with our skilled couple therapy sessions. Find a way to restore understanding and communication now."
            button="Lorem Ipsum Text"
            descClass="cardOnePara"
            classImage="cardOneImg"
            image={cardTwoImg}
          />
        </div>
        <div className="gridTwo">
          <CardOne
            Heading="Family counseling"
            description="Overcomes obstacles, enhances relationships, and promotes better communication for resilient, peacefulness and improved well-being."
            button="Enquire Now"
            descClass="cardOneDesc"
            classImage="cardTwoImg"
            image={cardTwoImg}
          />
          <CardOne
            Heading="Students counseling"
            description="Provides private support for various struggles, addressing stress, relationships, academic performance and personal growth."
            button="Enquire Now"
            descClass="cardOneDesc"
            classImage="cardTwoImg"
            image={cardTwoImg}
          />
          <CardOne
            Heading="Organizational counseling"
            description="Support for businesses, improving work environment, productivity, conflict, encouraging resilience, and implementing positive change for success."
            button="Enquire Now"
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
