import React, { useState } from "react";
import "./Diseases.css";

const Diseases = () => {
  const [isSelected, setIsSelected] = useState("Mental");
  const [isSelected1, setIsSelected1] = useState("Stress");
  const selectHandler = (e) => {
    setIsSelected(e.target.id);
    if (e.target.id == "Mental") {
      setIsSelected1("Stress");
    }
    if (e.target.id == "Relationship") {
      setIsSelected("Relationship");
      setIsSelected1("Work");
    }
  };
  const selectHandler1 = (e) => {
    setIsSelected1(e.target.id);
  };
  console.log(isSelected);
  console.log(isSelected1);
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
                id="Mental"
                onClick={selectHandler}
                className={
                  isSelected == "Mental"
                    ? "diseaseTabActive"
                    : "diseaseTabInactive"
                }
              >
                {isSelected == "Mental" && (
                  <div id="tab1" className="dot"></div>
                )}
                Mental Health Disorders
              </h2>
              <h2
                id="Relationship"
                onClick={selectHandler}
                className={
                  isSelected == "Relationship"
                    ? "diseaseTabActive"
                    : "diseaseTabInactive"
                }
              >
                {isSelected == "Relationship" && (
                  <div id="tab1" className="dot"></div>
                )}
                Relationship and Behavioral Issues
              </h2>
              {/* <h2
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
              </h2> */}
            </div>
            <div className="diseaseContainerFlexLeftBody">
              {isSelected == "Mental" && (
                <>
                  <h3
                    id="Stress"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Stress"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Stress
                  </h3>
                  <h3
                    id="Anxiety"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Anxiety"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Anxiety
                  </h3>
                  <h3
                    id="Bipolardisorder"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Bipolardisorder"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Bipolar disorder
                  </h3>
                  <h3
                    id="Depression"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Depression"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Depression
                  </h3>
                  <h3
                    id="Suicidalideation"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Suicidalideation"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Suicidal ideation
                  </h3>
                  <h3
                    id="Phobias"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Phobias"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Phobias
                  </h3>
                  <h3
                    id="ptsd"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "ptsd"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    PTSD
                  </h3>
                  <h3
                    id="PanicAttacks"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "PanicAttacks"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Panic Attacks
                  </h3>
                  <h3
                    id="SleepProblems"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "SleepProblems"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Sleep Problems
                  </h3>
                  <h3
                    id="Angermanagement"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Angermanagement"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Anger management
                  </h3>
                  <h3
                    id="Personalitydisorders"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Personalitydisorders"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Personality disorders
                  </h3>
                  <h3
                    id="Psychosomaticconcerns"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Psychosomaticconcerns"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Psychosomatic concerns
                  </h3>
                  <h3
                    id="Eatingdisorders"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Eatingdisorders"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Eating disorders
                  </h3>
                  <h3
                    id="Obsessive"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Obsessive"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Obsessive & Compulsive disorders
                  </h3>
                  <h3
                    id="Addiction"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Addiction"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Addiction
                  </h3>
                  <h3
                    id="Attention"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Attention"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    ADHD
                  </h3>
                  <h3
                    id="OCD"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "OCD" ? "diseaseActive" : "diseaseInactive"
                    }
                  >
                    OCD
                  </h3>
                  <h3
                    id="SAD"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "SAD" ? "diseaseActive" : "diseaseInactive"
                    }
                  >
                    SAD
                  </h3>
                  <h3
                    id="Childhood"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Childhood"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Childhood trauma
                  </h3>
                  <h3
                    id="Trauma"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Trauma"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Trauma
                  </h3>
                  <h3
                    id="Sexual"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Sexual"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Sexual well being
                  </h3>
                  <h3
                    id="Chronic"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Chronic"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Chronic pain management
                  </h3>{" "}
                </>
              )}
              {isSelected == "Relationship" && (
                <>
                  <h3
                    id="Work"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Work"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Work-related stress
                  </h3>
                  <h3
                    id="failure"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "failure"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Fear of failure
                  </h3>
                  <h3
                    id="Family"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Family"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Family difficulties
                  </h3>
                  <h3
                    id="Marital"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Marital"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Marital counseling
                  </h3>
                  <h3
                    id="ConflictResolution"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "ConflictResolution"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Conflict Resolution
                  </h3>
                  <h3
                    id="Trustissues"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Trustissues"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Trust issues
                  </h3>
                  <h3
                    id="Relationshipissues"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Relationshipissues"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Relationship issues
                  </h3>
                  <h3
                    id="Communicationissues"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Communicationissues"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Communication issues
                  </h3>
                  <h3
                    id="PremaritalCounseling"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "PremaritalCounseling"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Pre-marital Counseling
                  </h3>
                  <h3
                    id="Maritalcounseling"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Maritalcounseling"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Marital counseling
                  </h3>
                  <h3
                    id="Compulsiveshopping"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Compulsiveshopping"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Compulsive shopping
                  </h3>
                  <h3
                    id="Affairs"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Affairs"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Affairs & infidelity
                  </h3>
                  <h3
                    id="Social"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Social"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Social withdrawal
                  </h3>
                  <h3
                    id="Overthinking"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Overthinking"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Overthinking
                  </h3>
                  <h3
                    id="Existentialcrises"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Existentialcrises"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Existential crises
                  </h3>
                  <h3
                    id="Loneliness"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Loneliness"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Loneliness
                  </h3>
                  <h3
                    id="Low"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Low" ? "diseaseActive" : "diseaseInactive"
                    }
                  >
                    Low self-esteem
                  </h3>
                  <h3
                    id="dysmorphic"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "dysmorphic"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Body dysmorphic disorder
                  </h3>
                  <h3
                    id="Compulsive"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Compulsive"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Compulsive lying
                  </h3>
                  <h3
                    id="concentration"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "concentration"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Lack of concentration and motivation
                  </h3>
                  <h3
                    id="Procrastination"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "Procrastination"
                        ? "diseaseActive"
                        : "diseaseInactive"
                    }
                  >
                    Procrastination
                  </h3>
                </>
              )}
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
