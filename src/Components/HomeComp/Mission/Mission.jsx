import React, { useEffect } from "react";
import "./Mission.css";
import butterfly from "../../../assests/butterflyLogo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Mission = () => {
  gsap.registerPlugin(ScrollTrigger); //calling scroll trigger plugin

  useEffect(() => {
    // Main div is pinned
    // const tl1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".homeExpand",
    //     start: "5% 5%",
    //     end: "70% 30%",
    //     pin: ".pinDiv",
    //     markers: true,
    //     scrub: 1,
    //   },
    // });
    // extention1
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeExpand",
        start: "top 30%",
        end: "5% 30%",
        // start: "5% 5%",
        // end: "15% 5%",
        // markers: true,
        scrub: 2,
      },
    });
    tl2.to(".ourMissionExpand", { height: "200px" });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeExpand",
        start: "top 30%",
        end: "5% 30%",
        // start: "5% 5%",
        // end: "15% 5%",
        // markers: true,
        scrub: 2,
      },
    });
    tl3.to(".ourMissionExpandBody", { height: "100%" });

    // extention2
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeExpand",
        start: "top 53%",
        end: "5% 53%",
        // start: "5% -5%",
        // end: "10% -5%",
        // start: "5% 5%",
        // end: "15% 5%",
        // markers: true,
        scrub: 2,
      },
    });
    tl4.to(".ourVisionExpand", { height: "200px" });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeExpand",
        start: "50% 53%",
        end: "55% 53%",
        // start: "5% -5%",
        // end: "10% -5%",
        // start: "5% 5%",
        // end: "15% 5%",
        // markers: true,
        scrub: 2,
      },
    });
    tl5.to(".ourVisionExpandBody", { height: "100%" });
    return () => {
      // tl1.kill();
      tl2.kill();
      tl3.kill();
      tl4.kill();
      tl5.kill();
    };
  }, []);

  return (
    <>
      <div className="homeExpand pinDiv sectionWidth">
        <div className="homeExpandOne ourMissionExpand">
          <div className="homeExpandOneHead">
            <img src={butterfly} alt="" />
            <h1>
              Our <span>Mission</span>
            </h1>
          </div>
          <div className="homeExpandOneBody ourMissionExpandBody">
            <p>
              “At Trance, were pioneering a mental health revolution, offering
              unwavering support and empowering individuals to conquer their
              challenges and thrive.”
            </p>
          </div>
        </div>
        <div className="homeExpandOne ourVisionExpand">
          <div className="homeExpandOneHead">
            <img src={butterfly} alt="" />
            <h1>
              Our <span>Vision</span>
            </h1>
          </div>
          <div className="homeExpandOneBody ourVisionExpandBody">
            <p>
              “Trance aims to revolutionize mental health, building a global
              industry where all services unite to redefine holistic wellness.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
