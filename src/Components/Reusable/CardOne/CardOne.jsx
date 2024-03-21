import React from "react";
import "./CardOne.css";

const CardOne = (props) => {
  return (
    <div>
      <div className="cardOne">
        <div className="cardOneHead">
          <h1>{props.Heading}</h1>
          <p className={props.descClass}>{props.description}</p>
        </div>
        <button>{props.button}</button>
        <img className={props.classImage} src={props.image} alt="" />
      </div>
    </div>
  );
};

export default CardOne;
