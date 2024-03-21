import React, { useState } from "react";
import "./Diseases.css";

const Diseases = () => {
  const [isSelected, setIsSelected] = useState("tab1");
  const [isSelected1, setIsSelected1] = useState("d1");
  const selectHandler = (e) => {
    setIsSelected(e.target.id);
  };
  const selectHandler1 = (e) => {
    setIsSelected1(e.target.id);
  };
  return (
    <div>
      <div className="diseaseContainer sectionWidth">
        <div className="diseaseContainerHead">
          <h1>Lorem Ipsum Text</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="diseaseContainerFlex">
          <div className="diseaseContainerFlexLeft">
            <div className="diseaseContainerFlexLeftHead">
              <h2
                id="tab1"
                onClick={selectHandler}
                className={
                  isSelected == "tab1"
                    ? "diseaseTabActive"
                    : "diseaseTabInactive"
                }
              >
                {isSelected == "tab1" && <div id="tab1" className="dot"></div>}
                Lorem ipsum
              </h2>
              <h2
                id="tab2"
                onClick={selectHandler}
                className={
                  isSelected1 == "tab2"
                    ? "diseaseTabActive"
                    : "diseaseTabInactive"
                }
              >
                {isSelected == "tab2" && <div id="tab1" className="dot"></div>}
                Lorem ips
              </h2>
              <h2
                id="tab3"
                onClick={selectHandler}
                className={
                  isSelected == "tab3"
                    ? "diseaseTabActive"
                    : "diseaseTabInactive"
                }
              >
                {isSelected1 == "tab3" && <div id="tab3" className="dot"></div>}
                Lorem ipsum
              </h2>
            </div>
            <div className="diseaseContainerFlexLeftBody">
              <h3
                id="d1"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d1" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum
              </h3>
              <h3
                id="d2"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d2" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum is text
              </h3>
              <h3
                id="d3"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d3" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum dyn
              </h3>
              <h3
                id="d4"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d4" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum dyn
              </h3>
              <h3
                id="d5"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d5" ? "diseaseActive" : "diseaseInactive"
                }
              >
                lorem
              </h3>
              <h3
                id="d6"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d6" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum is text
              </h3>
              <h3
                id="d7"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d7" ? "diseaseActive" : "diseaseInactive"
                }
              >
                lorem
              </h3>
              <h3
                id="d8"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d8" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem Ipsum is a dummy{" "}
              </h3>
              <h3
                id="d9"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d9" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum
              </h3>
              <h3
                id="d10"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d10" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum dyn
              </h3>
              <h3
                id="d11"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d11" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum
              </h3>
              <h3
                id="d12"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d12" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum is text
              </h3>
              <h3
                id="d13"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d13" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum dyn
              </h3>
              <h3
                id="d14"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d14" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum dyn
              </h3>
              <h3
                id="d15"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d15" ? "diseaseActive" : "diseaseInactive"
                }
              >
                lorem
              </h3>
              <h3
                id="d16"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d16" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum is text
              </h3>
              <h3
                id="d17"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d17" ? "diseaseActive" : "diseaseInactive"
                }
              >
                lorem
              </h3>
              <h3
                id="d18"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d18" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem Ipsum is a dummy{" "}
              </h3>
              <h3
                id="d19"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d19" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum
              </h3>
              <h3
                id="d20"
                onClick={selectHandler1}
                className={
                  isSelected1 == "d20" ? "diseaseActive" : "diseaseInactive"
                }
              >
                Lorem ipsum dyn
              </h3>
            </div>
          </div>
          <div className="diseaseContainerFlexRight">
            <h1>Lorem Ipsum Text</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              when an unknown printer took a galley.Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseases;
