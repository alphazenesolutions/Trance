import React from "react";
import "./Testimonial.css";
import Heading from "../../Reusable/Heading/Heading";
import { FaStar } from "react-icons/fa";

const TestimonialComp = () => {
  return (
    <div>
      <div className="marginTop50 sectionWidth">
        <Heading
          Head="Testimonials"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum."
        />
        <div className="TestimonialCompBody">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="bentGrid2Icon">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="TestimonialCompBody">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
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
  );
};

export default TestimonialComp;
