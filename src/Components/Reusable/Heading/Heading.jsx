import React from "react";
import "./Heading.css";

const Heading = (props) => {
  return (
    <div>
      <div className="heading">
        <h1>{props.Head}</h1>
        <p className={props.descClass}>{props.desc}</p>
      </div>
    </div>
  );
};

export default Heading;
