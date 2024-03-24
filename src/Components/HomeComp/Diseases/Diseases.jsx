import React, { useState } from "react";
import "./Diseases.css";
import { IoMdCloseCircle } from "react-icons/io";

const Diseases = () => {
  const [isSelected, setIsSelected] = useState("Mental");
  const [isSelected1, setIsSelected1] = useState("Stress");
  const [isOverlay, setIsOverlay] = useState(false);
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
    setIsOverlay(true);
  };

  const closeOverlay = () => {
    setIsOverlay(false);
  };
  console.log(isSelected);
  console.log(isSelected1);
  console.log(isOverlay);
  return (
    <div>
      <div className="diseaseContainer sectionWidth">
        <div className="diseaseContainerHead">
          <h1>Lorem Ipsum Text</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
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
                    id="odc"
                    onClick={selectHandler1}
                    className={
                      isSelected1 == "odc" ? "diseaseActive" : "diseaseInactive"
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
            {isSelected1 == "Stress" && <h1>Stress</h1>}
            {isSelected1 == "Anxiety" && <h1>Anxiety</h1>}
            {isSelected1 == "Bipolardisorder" && <h1>Bipolar disorder</h1>}
            {isSelected1 == "Depression" && <h1>Depression</h1>}
            {isSelected1 == "Suicidalideation" && <h1>Suicidal ideation</h1>}
            {isSelected1 == "Phobias" && <h1>Phobias</h1>}
            {isSelected1 == "ptsd" && <h1>Post-traumatic stress disorder</h1>}
            {isSelected1 == "PanicAttacks" && <h1>Panic attacks</h1>}
            {isSelected1 == "SleepProblems" && <h1>Sleep problems</h1>}
            {isSelected1 == "Angermanagement" && <h1>Anger management</h1>}
            {isSelected1 == "Personalitydisorders" && (
              <h1>Personality disorders</h1>
            )}
            {isSelected1 == "Psychosomaticconcerns" && (
              <h1>Psychosomatic concerns</h1>
            )}
            {isSelected1 == "Eatingdisorders" && <h1>Eating disorder</h1>}
            {isSelected1 == "Addiction" && <h1>Addiction</h1>}{" "}
            {isSelected1 == "Attention" && <h1>ADHD</h1>}{" "}
            {isSelected1 == "SAD" && <h1>Seasonal affective disorder</h1>}
            {isSelected1 == "odc" && <h1>Obsessive compulsive disorder</h1>}
            {isSelected1 == "Childhood" && <h1>Childhood Trauma</h1>}
            {isSelected1 == "Trauma" && <h1>Trauma</h1>}{" "}
            {isSelected1 == "Sexual" && <h1>Sexual well-being</h1>}{" "}
            {isSelected1 == "Chronic" && <h1>Chronic pain management</h1>}
            {isSelected1 == "Stress" && (
              <p>
                Stress is the body's natural response to pressure or demands,
                often triggered by various situations such as work deadlines,
                financial worries, or personal conflicts. It can express
                physically, emotionally, and mentally, leading to feelings of
                tension, anxiety, and fatigue. For instance, imagine a student
                preparing for final exams while juggling part-time work and
                family responsibilities. The threatening deadlines, academic
                pressure, and balancing act can induce significant stress,
                causing sleepless nights, difficulty concentrating, and
                heightened emotions. This example illustrates how stress can
                affect individuals in different aspects of their lives,
                underscoring the importance of managing stress effectively for
                overall well-being.
              </p>
            )}
            {isSelected1 == "Anxiety" && (
              <p>
                Anxiety is a common mental health condition characterized by
                feelings of worry, nervousness, and unease about uncertain
                outcomes. Imagine preparing for a job interview: as time
                approaches, you might constantly check your phone, your heart
                racing, and your thoughts consumed by what could go wrong. This
                scenario illustrates the grip of anxiety, where everyday
                situations can trigger overwhelming apprehension. Whether it's
                fretting over a social gathering or stressing about upcoming
                deadlines, anxiety can manifest in various forms and impact
                daily life. Learning to manage anxiety is essential for
                maintaining mental well-being and navigating through life's
                challenges with greater resilience.
              </p>
            )}
            {isSelected1 == "Bipolardisorder" && (
              <p>
                Bipolar disorder is a mental health condition characterized by
                extreme mood swings that include emotional highs (mania or
                hypomania) and lows (depression). Bipolar disorder is like
                having a mental weather system inside you. For example,
                sometimes it's sunny and bright, filled with energy and
                enthusiasm (manic phase), but other times it's stormy and dark,
                with feelings of sadness and hopelessness (depressive phase).
                Just as the weather can change unpredictably, so too can a
                person's mood with bipolar disorder. These fluctuations can
                disrupt daily life, relationships, and work. Treatment typically
                involves medication, therapy, and lifestyle adjustments to
                manage symptoms and stabilize mood. With proper support and
                understanding, individuals with bipolar disorder can lead
                fulfilling lives.
              </p>
            )}
            {isSelected1 == "Depression" && (
              <p>
                Depression is a mental health condition characterized by
                persistent feelings of sadness, hopelessness, and a lack of
                interest in activities once enjoyed. For example, you used to
                enjoy going out with friends, but now the thought of socializing
                feels overwhelming, so you withdraw more and more. Depression
                can affect anyone, regardless of age, gender, or background, and
                its impact can be debilitating if left untreated. However, with
                proper support, therapy, and sometimes medication, individuals
                can learn to manage their symptoms and regain a sense of joy and
                fulfilment in their lives. If you or someone you know is
                struggling with depression, know that help is available, and you
                are not alone.
              </p>
            )}
            {isSelected1 == "Suicidalideation" && (
              <p>
                Suicidal ideation, or thoughts of self-harm or ending one's
                life, can be a distressing experience for individuals struggling
                with mental health challenges. Imagine feeling overwhelmed by
                your emotions, like being trapped in a dark tunnel with no way
                out. These thoughts may manifest as a constant whisper in your
                mind, urging you towards a depressing and irreversible solution
                to your pain. It is difficult to understand for those who
                haven't experienced it, suicidal ideation is a real and serious
                issue that requires understanding, empathy, and appropriate
                support. If you or someone you know is struggling with suicidal
                thoughts, know that help is available and reaching out for
                support can make a significant difference in finding hope and
                healing.
              </p>
            )}
            {isSelected1 == "Phobias" && (
              <p>
                Phobias are intense, irrational fears of specific objects,
                situations, or activities. They can significantly disrupt daily
                life and cause overwhelming anxiety. Take arachnophobia, for
                example, one of the most common phobias, where individuals
                experience an uncontrollable fear of spiders. Even though
                spiders are often harmless, those with arachnophobia may
                experience panic attacks or extreme distress when encountering
                them. Phobias are more than just simple fears; they can be
                debilitating and may require professional treatment to manage
                effectively. Understanding and addressing phobias is crucial for
                individuals to live happier, healthier lives.
              </p>
            )}
            {isSelected1 == "ptsd" && (
              <p>
                Post-Traumatic Stress Disorder (PTSD) is a mental health
                condition triggered by a terrifying event, either experiencing
                it or witnessing it. Symptoms may include flashbacks,
                nightmares, severe anxiety, and uncontrollable thoughts about
                the event. These symptoms can disrupt daily life and make it
                challenging to function normally. PTSD can affect anyone who has
                experienced a traumatic event, imagine witnessing a car
                accident, yourself haunted by nightmares and unable to shake the
                fear that it would happen again. Even the sound of screeching
                tyres triggered panic attacks. These symptoms persisted for
                months, affecting the ability to work and maintain
                relationships. Seeking professional help is crucial for managing
                PTSD, as therapy and medication can help individuals regain
                control of their lives and find healing.
              </p>
            )}
            {isSelected1 == "PanicAttacks" && (
              <p>
                Panic attacks are intense episodes of overwhelming fear or
                anxiety that can strike suddenly and without warning, causing a
                range of distressing physical and psychological symptoms.
                Imagine this: You're in a crowded room, surrounded by people
                chatting and laughing. Suddenly, your heart begins to race, your
                palms start sweating, and you struggle to catch your breath.
                Your mind races with thoughts and you feel like you're losing
                control. This is just one example of a panic attack, a
                terrifying experience that can leave individuals feeling
                helpless and frightened. If you or someone you know is
                struggling with panic attacks, it's important to seek support
                and guidance from a qualified mental health professional.
              </p>
            )}
            {isSelected1 == "SleepProblems" && (
              <p>
                Struggling with sleep problems can disrupt your daily life and
                affect your overall well-being. From difficulty falling asleep
                to waking up frequently throughout the night, these issues can
                leave you feeling fatigued and irritable during the day. For
                instance, imagine lying in bed for hours, jerking and turning,
                unable to quiet your mind enough to drift off into a peaceful
                sleep. Whether it's stress, discomfort, or underlying health
                conditions, addressing sleep problems is crucial for maintaining
                optimal health and productivity. Discover effective solutions
                and tips to reclaim your restful nights on our treatment.
              </p>
            )}
            {isSelected1 == "Angermanagement" && (
              <p>
                Anger management is the process of recognizing and controlling
                anger before it escalates into destructive behaviour. By
                learning healthy coping mechanisms and communication skills,
                individuals can effectively manage their emotions and respond to
                frustrating situations constructively. For instance, instead of
                yelling or lashing out when faced with a disagreement, one could
                practice deep breathing techniques to calm down and express
                their concerns calmly and assertively. Anger management not only
                improves relationships and reduces stress but also fosters a
                sense of self-awareness and emotional resilience.
              </p>
            )}
            {isSelected1 == "Personalitydisorders" && (
              <p>
                Personality disorders are enduring patterns of inner experience
                and behavior that deviate significantly from cultural
                expectations and cause distress or impairment. One example is
                Borderline Personality Disorder (BPD), characterized by intense
                mood swings, unstable self-image, and troubled relationships.
                For instance, someone with BPD might experience extreme
                emotional highs and lows within short periods, leading to
                impulsive actions such as wasteful spending or self-harming
                behaviors. These patterns often disrupt daily functioning and
                stress interpersonal connections. Understanding and
                compassionate support are crucial for individuals navigating
                personality disorders, as they can greatly impact one's quality
                of life and relationships.
              </p>
            )}
            {isSelected1 == "Psychosomaticconcerns" && (
              <p>
                Psychosomatic concerns refer to physical symptoms or illnesses
                that are primarily influenced by psychological factors such as
                stress, anxiety, or emotional distress. These issues often
                manifest in bodily symptoms despite the absence of any
                underlying medical cause. For example, someone experiencing
                extreme stress might develop tension headaches or
                gastrointestinal discomfort without any apparent physical
                reason. Understanding and addressing psychosomatic concerns
                involves recognizing the elaborate connection between mind and
                body, by consulting with a mental health professional to reduce
                symptoms and promote overall well-being.
              </p>
            )}
            {isSelected1 == "Eatingdisorders" && (
              <p>
                Eating disorders are complex mental health conditions
                characterized by irregular eating habits and severe distress or
                concern about body weight or shape. One example of an eating
                disorder is anorexia nervosa, where individuals may restrict
                their food intake severely, often accompanied by an intense fear
                of gaining weight or becoming fat. Another example is bulimia
                nervosa, characterized by episodes of binge eating followed by
                purging behaviors such as self-induced vomiting or excessive
                exercise. These disorders can have serious physical and
                psychological consequences, highlighting the importance of
                seeking professional help and support for those affected.
              </p>
            )}
            {isSelected1 == "Sexual" && (
              <p>
                Sexual well-being encompasses the physical, emotional, mental,
                and social aspects of sexuality that contribute to a fulfilling
                and satisfying sexual life. It involves feeling comfortable with
                one's body, experiencing pleasure, and engaging in consensual
                and respectful sexual relationships. For instance, understanding
                and communicating your boundaries with a partner, such as
                expressing preferences during intimacy, can enhance sexual
                well-being. It also involves being informed about sexual health,
                practicing safe sex, and seeking support when needed.
                Prioritizing sexual well-being fosters a positive relationship
                with oneself and others, promoting overall health and happiness.
              </p>
            )}
            {isSelected1 == "odc" && (
              <p>
                Obsessive-compulsive disorder (OCD) is a mental health condition
                characterized by persistent, unwanted thoughts (obsessions) and
                repetitive behaviors or mental acts (compulsions). These
                obsessions and compulsions can significantly interfere with
                daily activities and cause distress. For instance, someone with
                OCD may have an obsessive fear of germs, leading them to
                compulsively wash their hands multiple times a day, even to the
                point of causing skin irritation. OCD can vary in severity, but
                effective treatments such as therapy and medication are
                available to help manage symptoms and improve quality of life.
              </p>
            )}
            {isSelected1 == "Addiction" && (
              <p>
                Addiction is a complicated condition characterized by compulsive
                engagement in rewarding stimuli despite negative consequences.
                Imagine constantly checking your smartphone for notifications,
                even when you're in the middle of a conversation or trying to
                focus on a task. This behavior, connected to digital addiction,
                illustrates how individuals can become fixated on certain
                activities or substances, unable to control their impulses
                despite knowing the harm it may cause. Addiction can encompass a
                wide range of behaviors and substances, from drugs and alcohol
                to gambling, gaming, or even shopping excessively online. It's a
                widespread issue that can profoundly impact one's physical
                health, mental well-being, and overall quality of life
              </p>
            )}
            {isSelected1 == "Attention" && (
              <p>
                Attention Deficit Hyperactivity Disorder, is a
                neurodevelopmental condition characterized by difficulty in
                sustaining attention, impulsivity, and hyperactivity. Imagine
                trying to focus on a task, but your mind keeps wandering off to
                different thoughts, making it challenging to concentrate. For
                instance, a student with ADHD might find it hard to sit still
                during a lecture, constantly fidgeting or doodling to stay
                engaged. ADHD affects individuals across various aspects of
                life, from academic performance to social interactions, but with
                proper understanding and support, people with ADHD can learn
                strategies to manage their symptoms effectively and thrive in
                their daily activities.
              </p>
            )}
            {isSelected1 == "Chronic" && (
              <p>
                Chronic pain management involves the ongoing process of
                relieving and coping with persistent pain that lasts beyond the
                normal time frame for healing. Through a combination of medical
                interventions, lifestyle adjustments, and psychological support,
                individuals can find relief and improve their quality of life.
                For instance, imagine someone with arthritis who experiences
                daily joint pain. Their chronic pain management plan might
                include a mix of medication, physical therapy exercises, and
                comfort adjustments to their workspace to reduce strain on their
                joints. By actively engaging in their pain management regimen,
                they can mitigate discomfort and maintain functionality,
                enabling them to lead a more fulfilling life despite their
                condition.
              </p>
            )}
            {isSelected1 == "Trauma" && (
              <p>
                Trauma, in psychological terms, refers to a distressing or
                disturbing experience that overwhelms an individual's ability to
                cope, leaving lasting emotional or psychological scars. Imagine
                a child witnessing a car accident involving a loved one; the
                shock and fear they feel in that moment can affect a lot,
                potentially impacting their mental well-being in the future.
                Trauma can manifest in various forms, from post-traumatic stress
                disorder (PTSD) to anxiety and depression. Understanding and
                addressing trauma is crucial for individuals to heal and regain
                a sense of stability in their lives.
              </p>
            )}
            {isSelected1 == "Childhood" && (
              <p>
                Childhood trauma can have profound and lasting effects on an
                individual's mental and emotional well-being. It encompasses a
                range of experiences, from neglect and physical abuse to
                witnessing violence or experiencing the loss of a loved one. For
                instance, imagine a child who grows up in a household where
                there's constant yelling and arguing between parents. This
                ongoing exposure to conflict can instill fear and anxiety in the
                child, impacting their ability to form healthy relationships and
                manage stress later in life. Childhood trauma underscores the
                importance of providing safe and nurturing environments for
                children to thrive and heal from adverse experiences.
              </p>
            )}
            {isSelected1 == "SAD" && (
              <p>
                Seasonal Affective Disorder (SAD) is a type of depression that
                occurs at a specific time of year, typically in the winter
                months when daylight hours are shorter. Individuals with SAD may
                experience symptoms such as low mood, lack of energy, difficulty
                concentrating, changes in appetite, and increased need for
                sleep. One easy example of SAD might be feeling consistently
                down and lethargic during the winter months, despite there being
                no obvious external cause for these feelings. It's important to
                recognize the symptoms of SAD and seek appropriate support and
                treatment to manage the condition effectively.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mobileHandler">
        {isOverlay == true && <div onClick={closeOverlay} id="overlay"></div>}
        {isOverlay == true && (
          <div className="diseaseOverlay">
            <div className="diseaseOverlayHead">
              {isSelected1 == "Stress" && <h1>Stress</h1>}
              {isSelected1 == "Anxiety" && <h1>Anxiety</h1>}
              {isSelected1 == "Bipolardisorder" && <h1>Bipolar disorder</h1>}
              {isSelected1 == "Depression" && <h1>Depression</h1>}
              {isSelected1 == "Suicidalideation" && <h1>Suicidal ideation</h1>}
              {isSelected1 == "Phobias" && <h1>Phobias</h1>}
              {isSelected1 == "ptsd" && <h1>Post-traumatic stress disorder</h1>}
              {isSelected1 == "PanicAttacks" && <h1>Panic attacks</h1>}
              {isSelected1 == "SleepProblems" && <h1>Sleep problems</h1>}
              {isSelected1 == "Angermanagement" && <h1>Anger management</h1>}
              {isSelected1 == "Personalitydisorders" && (
                <h1>Personality disorders</h1>
              )}
              {isSelected1 == "Psychosomaticconcerns" && (
                <h1>Psychosomatic concerns</h1>
              )}
              {isSelected1 == "Eatingdisorders" && <h1>Eating disorder</h1>}
              {isSelected1 == "Addiction" && <h1>Addiction</h1>}{" "}
              {isSelected1 == "Attention" && <h1>ADHD</h1>}{" "}
              {isSelected1 == "SAD" && <h1>Seasonal affective disorder</h1>}
              {isSelected1 == "odc" && <h1>Obsessive compulsive disorder</h1>}
              {isSelected1 == "Childhood" && <h1>Childhood Trauma</h1>}
              {isSelected1 == "Trauma" && <h1>Trauma</h1>}{" "}
              {isSelected1 == "Sexual" && <h1>Sexual well-being</h1>}{" "}
              {isSelected1 == "Chronic" && <h1>Chronic pain management</h1>}
              <IoMdCloseCircle onClick={closeOverlay} className="close" />
            </div>
            <div className="diseaseOverlayBody">
              {isSelected1 == "Stress" && (
                <p>
                  Stress is the body's natural response to pressure or demands,
                  often triggered by various situations such as work deadlines,
                  financial worries, or personal conflicts. It can express
                  physically, emotionally, and mentally, leading to feelings of
                  tension, anxiety, and fatigue. For instance, imagine a student
                  preparing for final exams while juggling part-time work and
                  family responsibilities. The threatening deadlines, academic
                  pressure, and balancing act can induce significant stress,
                  causing sleepless nights, difficulty concentrating, and
                  heightened emotions. This example illustrates how stress can
                  affect individuals in different aspects of their lives,
                  underscoring the importance of managing stress effectively for
                  overall well-being.
                </p>
              )}
              {isSelected1 == "Anxiety" && (
                <p>
                  Anxiety is a common mental health condition characterized by
                  feelings of worry, nervousness, and unease about uncertain
                  outcomes. Imagine preparing for a job interview: as time
                  approaches, you might constantly check your phone, your heart
                  racing, and your thoughts consumed by what could go wrong.
                  This scenario illustrates the grip of anxiety, where everyday
                  situations can trigger overwhelming apprehension. Whether it's
                  fretting over a social gathering or stressing about upcoming
                  deadlines, anxiety can manifest in various forms and impact
                  daily life. Learning to manage anxiety is essential for
                  maintaining mental well-being and navigating through life's
                  challenges with greater resilience.
                </p>
              )}
              {isSelected1 == "Bipolardisorder" && (
                <p>
                  Bipolar disorder is a mental health condition characterized by
                  extreme mood swings that include emotional highs (mania or
                  hypomania) and lows (depression). Bipolar disorder is like
                  having a mental weather system inside you. For example,
                  sometimes it's sunny and bright, filled with energy and
                  enthusiasm (manic phase), but other times it's stormy and
                  dark, with feelings of sadness and hopelessness (depressive
                  phase). Just as the weather can change unpredictably, so too
                  can a person's mood with bipolar disorder. These fluctuations
                  can disrupt daily life, relationships, and work. Treatment
                  typically involves medication, therapy, and lifestyle
                  adjustments to manage symptoms and stabilize mood. With proper
                  support and understanding, individuals with bipolar disorder
                  can lead fulfilling lives.
                </p>
              )}
              {isSelected1 == "Depression" && (
                <p>
                  Depression is a mental health condition characterized by
                  persistent feelings of sadness, hopelessness, and a lack of
                  interest in activities once enjoyed. For example, you used to
                  enjoy going out with friends, but now the thought of
                  socializing feels overwhelming, so you withdraw more and more.
                  Depression can affect anyone, regardless of age, gender, or
                  background, and its impact can be debilitating if left
                  untreated. However, with proper support, therapy, and
                  sometimes medication, individuals can learn to manage their
                  symptoms and regain a sense of joy and fulfilment in their
                  lives. If you or someone you know is struggling with
                  depression, know that help is available, and you are not
                  alone.
                </p>
              )}
              {isSelected1 == "Suicidalideation" && (
                <p>
                  Suicidal ideation, or thoughts of self-harm or ending one's
                  life, can be a distressing experience for individuals
                  struggling with mental health challenges. Imagine feeling
                  overwhelmed by your emotions, like being trapped in a dark
                  tunnel with no way out. These thoughts may manifest as a
                  constant whisper in your mind, urging you towards a depressing
                  and irreversible solution to your pain. It is difficult to
                  understand for those who haven't experienced it, suicidal
                  ideation is a real and serious issue that requires
                  understanding, empathy, and appropriate support. If you or
                  someone you know is struggling with suicidal thoughts, know
                  that help is available and reaching out for support can make a
                  significant difference in finding hope and healing.
                </p>
              )}
              {isSelected1 == "Phobias" && (
                <p>
                  Phobias are intense, irrational fears of specific objects,
                  situations, or activities. They can significantly disrupt
                  daily life and cause overwhelming anxiety. Take arachnophobia,
                  for example, one of the most common phobias, where individuals
                  experience an uncontrollable fear of spiders. Even though
                  spiders are often harmless, those with arachnophobia may
                  experience panic attacks or extreme distress when encountering
                  them. Phobias are more than just simple fears; they can be
                  debilitating and may require professional treatment to manage
                  effectively. Understanding and addressing phobias is crucial
                  for individuals to live happier, healthier lives.
                </p>
              )}
              {isSelected1 == "ptsd" && (
                <p>
                  Post-Traumatic Stress Disorder (PTSD) is a mental health
                  condition triggered by a terrifying event, either experiencing
                  it or witnessing it. Symptoms may include flashbacks,
                  nightmares, severe anxiety, and uncontrollable thoughts about
                  the event. These symptoms can disrupt daily life and make it
                  challenging to function normally. PTSD can affect anyone who
                  has experienced a traumatic event, imagine witnessing a car
                  accident, yourself haunted by nightmares and unable to shake
                  the fear that it would happen again. Even the sound of
                  screeching tyres triggered panic attacks. These symptoms
                  persisted for months, affecting the ability to work and
                  maintain relationships. Seeking professional help is crucial
                  for managing PTSD, as therapy and medication can help
                  individuals regain control of their lives and find healing.
                </p>
              )}
              {isSelected1 == "PanicAttacks" && (
                <p>
                  Panic attacks are intense episodes of overwhelming fear or
                  anxiety that can strike suddenly and without warning, causing
                  a range of distressing physical and psychological symptoms.
                  Imagine this: You're in a crowded room, surrounded by people
                  chatting and laughing. Suddenly, your heart begins to race,
                  your palms start sweating, and you struggle to catch your
                  breath. Your mind races with thoughts and you feel like you're
                  losing control. This is just one example of a panic attack, a
                  terrifying experience that can leave individuals feeling
                  helpless and frightened. If you or someone you know is
                  struggling with panic attacks, it's important to seek support
                  and guidance from a qualified mental health professional.
                </p>
              )}
              {isSelected1 == "SleepProblems" && (
                <p>
                  Struggling with sleep problems can disrupt your daily life and
                  affect your overall well-being. From difficulty falling asleep
                  to waking up frequently throughout the night, these issues can
                  leave you feeling fatigued and irritable during the day. For
                  instance, imagine lying in bed for hours, jerking and turning,
                  unable to quiet your mind enough to drift off into a peaceful
                  sleep. Whether it's stress, discomfort, or underlying health
                  conditions, addressing sleep problems is crucial for
                  maintaining optimal health and productivity. Discover
                  effective solutions and tips to reclaim your restful nights on
                  our treatment.
                </p>
              )}
              {isSelected1 == "Angermanagement" && (
                <p>
                  Anger management is the process of recognizing and controlling
                  anger before it escalates into destructive behaviour. By
                  learning healthy coping mechanisms and communication skills,
                  individuals can effectively manage their emotions and respond
                  to frustrating situations constructively. For instance,
                  instead of yelling or lashing out when faced with a
                  disagreement, one could practice deep breathing techniques to
                  calm down and express their concerns calmly and assertively.
                  Anger management not only improves relationships and reduces
                  stress but also fosters a sense of self-awareness and
                  emotional resilience.
                </p>
              )}
              {isSelected1 == "Personalitydisorders" && (
                <p>
                  Personality disorders are enduring patterns of inner
                  experience and behavior that deviate significantly from
                  cultural expectations and cause distress or impairment. One
                  example is Borderline Personality Disorder (BPD),
                  characterized by intense mood swings, unstable self-image, and
                  troubled relationships. For instance, someone with BPD might
                  experience extreme emotional highs and lows within short
                  periods, leading to impulsive actions such as wasteful
                  spending or self-harming behaviors. These patterns often
                  disrupt daily functioning and stress interpersonal
                  connections. Understanding and compassionate support are
                  crucial for individuals navigating personality disorders, as
                  they can greatly impact one's quality of life and
                  relationships.
                </p>
              )}
              {isSelected1 == "Psychosomaticconcerns" && (
                <p>
                  Psychosomatic concerns refer to physical symptoms or illnesses
                  that are primarily influenced by psychological factors such as
                  stress, anxiety, or emotional distress. These issues often
                  manifest in bodily symptoms despite the absence of any
                  underlying medical cause. For example, someone experiencing
                  extreme stress might develop tension headaches or
                  gastrointestinal discomfort without any apparent physical
                  reason. Understanding and addressing psychosomatic concerns
                  involves recognizing the elaborate connection between mind and
                  body, by consulting with a mental health professional to
                  reduce symptoms and promote overall well-being.
                </p>
              )}
              {isSelected1 == "Eatingdisorders" && (
                <p>
                  Eating disorders are complex mental health conditions
                  characterized by irregular eating habits and severe distress
                  or concern about body weight or shape. One example of an
                  eating disorder is anorexia nervosa, where individuals may
                  restrict their food intake severely, often accompanied by an
                  intense fear of gaining weight or becoming fat. Another
                  example is bulimia nervosa, characterized by episodes of binge
                  eating followed by purging behaviors such as self-induced
                  vomiting or excessive exercise. These disorders can have
                  serious physical and psychological consequences, highlighting
                  the importance of seeking professional help and support for
                  those affected.
                </p>
              )}
              {isSelected1 == "Sexual" && (
                <p>
                  Sexual well-being encompasses the physical, emotional, mental,
                  and social aspects of sexuality that contribute to a
                  fulfilling and satisfying sexual life. It involves feeling
                  comfortable with one's body, experiencing pleasure, and
                  engaging in consensual and respectful sexual relationships.
                  For instance, understanding and communicating your boundaries
                  with a partner, such as expressing preferences during
                  intimacy, can enhance sexual well-being. It also involves
                  being informed about sexual health, practicing safe sex, and
                  seeking support when needed. Prioritizing sexual well-being
                  fosters a positive relationship with oneself and others,
                  promoting overall health and happiness.
                </p>
              )}
              {isSelected1 == "odc" && (
                <p>
                  Obsessive-compulsive disorder (OCD) is a mental health
                  condition characterized by persistent, unwanted thoughts
                  (obsessions) and repetitive behaviors or mental acts
                  (compulsions). These obsessions and compulsions can
                  significantly interfere with daily activities and cause
                  distress. For instance, someone with OCD may have an obsessive
                  fear of germs, leading them to compulsively wash their hands
                  multiple times a day, even to the point of causing skin
                  irritation. OCD can vary in severity, but effective treatments
                  such as therapy and medication are available to help manage
                  symptoms and improve quality of life.
                </p>
              )}
              {isSelected1 == "Addiction" && (
                <p>
                  Addiction is a complicated condition characterized by
                  compulsive engagement in rewarding stimuli despite negative
                  consequences. Imagine constantly checking your smartphone for
                  notifications, even when you're in the middle of a
                  conversation or trying to focus on a task. This behavior,
                  connected to digital addiction, illustrates how individuals
                  can become fixated on certain activities or substances, unable
                  to control their impulses despite knowing the harm it may
                  cause. Addiction can encompass a wide range of behaviors and
                  substances, from drugs and alcohol to gambling, gaming, or
                  even shopping excessively online. It's a widespread issue that
                  can profoundly impact one's physical health, mental
                  well-being, and overall quality of life
                </p>
              )}
              {isSelected1 == "Attention" && (
                <p>
                  Attention Deficit Hyperactivity Disorder, is a
                  neurodevelopmental condition characterized by difficulty in
                  sustaining attention, impulsivity, and hyperactivity. Imagine
                  trying to focus on a task, but your mind keeps wandering off
                  to different thoughts, making it challenging to concentrate.
                  For instance, a student with ADHD might find it hard to sit
                  still during a lecture, constantly fidgeting or doodling to
                  stay engaged. ADHD affects individuals across various aspects
                  of life, from academic performance to social interactions, but
                  with proper understanding and support, people with ADHD can
                  learn strategies to manage their symptoms effectively and
                  thrive in their daily activities.
                </p>
              )}
              {isSelected1 == "Chronic" && (
                <p>
                  Chronic pain management involves the ongoing process of
                  relieving and coping with persistent pain that lasts beyond
                  the normal time frame for healing. Through a combination of
                  medical interventions, lifestyle adjustments, and
                  psychological support, individuals can find relief and improve
                  their quality of life. For instance, imagine someone with
                  arthritis who experiences daily joint pain. Their chronic pain
                  management plan might include a mix of medication, physical
                  therapy exercises, and comfort adjustments to their workspace
                  to reduce strain on their joints. By actively engaging in
                  their pain management regimen, they can mitigate discomfort
                  and maintain functionality, enabling them to lead a more
                  fulfilling life despite their condition.
                </p>
              )}
              {isSelected1 == "Trauma" && (
                <p>
                  Trauma, in psychological terms, refers to a distressing or
                  disturbing experience that overwhelms an individual's ability
                  to cope, leaving lasting emotional or psychological scars.
                  Imagine a child witnessing a car accident involving a loved
                  one; the shock and fear they feel in that moment can affect a
                  lot, potentially impacting their mental well-being in the
                  future. Trauma can manifest in various forms, from
                  post-traumatic stress disorder (PTSD) to anxiety and
                  depression. Understanding and addressing trauma is crucial for
                  individuals to heal and regain a sense of stability in their
                  lives.
                </p>
              )}
              {isSelected1 == "Childhood" && (
                <p>
                  Childhood trauma can have profound and lasting effects on an
                  individual's mental and emotional well-being. It encompasses a
                  range of experiences, from neglect and physical abuse to
                  witnessing violence or experiencing the loss of a loved one.
                  For instance, imagine a child who grows up in a household
                  where there's constant yelling and arguing between parents.
                  This ongoing exposure to conflict can instill fear and anxiety
                  in the child, impacting their ability to form healthy
                  relationships and manage stress later in life. Childhood
                  trauma underscores the importance of providing safe and
                  nurturing environments for children to thrive and heal from
                  adverse experiences.
                </p>
              )}
              {isSelected1 == "SAD" && (
                <p>
                  Seasonal Affective Disorder (SAD) is a type of depression that
                  occurs at a specific time of year, typically in the winter
                  months when daylight hours are shorter. Individuals with SAD
                  may experience symptoms such as low mood, lack of energy,
                  difficulty concentrating, changes in appetite, and increased
                  need for sleep. One easy example of SAD might be feeling
                  consistently down and lethargic during the winter months,
                  despite there being no obvious external cause for these
                  feelings. It's important to recognize the symptoms of SAD and
                  seek appropriate support and treatment to manage the condition
                  effectively.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diseases;
