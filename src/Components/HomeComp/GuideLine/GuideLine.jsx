import React from "react";
import "./GuideLine.css";
import guideImg from "../../../assests/guideline.svg";

const GuideLine = () => {
  return (
    <div>
      <div className="guideLineContainer sectionWidth">
        <div className="guideLineContainerFlex">
          <div className="guideLineContainerFlexLeft">
            <img src={guideImg} alt="" />
          </div>
          <div className="guideLineContainerFlexRight">
            <h1>Lorem Ipsum Text</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideLine;
