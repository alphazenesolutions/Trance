import React, { useEffect } from "react";
import "./HomeExpand.css";
import butterfly from "../../../assests/butterflyLogo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeExpand = () => {
  gsap.registerPlugin(ScrollTrigger); //calling scroll trigger plugin

  useEffect(() => {
    // Main div is pinned
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeExpand",
        start: "5% 5%",
        end: "70% 30%",
        pin: ".pinDiv",
        markers: true,
        scrub: 1,
      },
    });
    // extention1
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeExpand",
        // start: "top 30%",
        // end: "5% 30%",
        start: "5% 5%",
        end: "15% 5%",
        // markers: true,
        scrub: 2,
      },
    });
    tl2.to(".homeExpandOne", { height: "380px" });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeExpand",
        // start: "top 30%",
        // end: "5% 30%",
        start: "5% 5%",
        end: "15% 5%",
        // markers: true,
        scrub: 2,
      },
    });
    tl3.to(".homeExpandOneBody", { height: "100%" });

    // extention2
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeExpand",
        // start: "top 53%",
        // end: "5% 53%",
        // start: "5% -5%",
        // end: "10% -5%",
        start: "5% 5%",
        end: "15% 5%",
        markers: true,
        scrub: 2,
      },
    });
    tl4.to(".homeExpandTwo", { height: "380px" });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeExpand",
        // start: "50% 53%",
        // end: "55% 53%",
        // start: "5% -5%",
        // end: "10% -5%",
        start: "5% 5%",
        end: "15% 5%",
        markers: true,
        scrub: 2,
      },
    });
    tl5.to(".homeExpandTwoBody", { height: "100%" });
    return () => {
      tl1.kill();
      tl2.kill();
      tl3.kill();
      tl4.kill();
      tl5.kill();
    };
  }, []);

  return (
    <di className="">
      <div className="homeExpand pinDiv">
        <div className="homeExpandOne">
          <div className="homeExpandOneHead">
            <img src={butterfly} alt="" />
            <h1>
              Our <span>Mission</span>
            </h1>
          </div>
          <div className="homeExpandOneBody">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <div className="homeExpandList">
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="homeExpandOne">
          <div className="homeExpandOneHead">
            <img src={butterfly} alt="" />
            <h1>
              Our <span>Vision</span>
            </h1>
          </div>
          <div className="homeExpandOneBody">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <div className="homeExpandList">
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
            </div>
          </div>
        </div> */}
        <div className="homeExpandTwo">
          <div className="homeExpandTwoHead">
            <img src={butterfly} alt="" />
            <h1>
              Our <span>Vision</span>
            </h1>
          </div>

          <div className="homeExpandTwoBody">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <div className="homeExpandList">
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="homeExpandListItems">
                <div className="dotExpand"></div>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </di>
  );
};

export default HomeExpand;
