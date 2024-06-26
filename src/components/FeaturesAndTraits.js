import React from "react";
import {
  fadeInFromLeft,
  fadeInFromBottom,
  slideInFromRightVariant,
} from "../animations/animations";
import AnimatedComponent from "../animations/AnimatedComponent";
import "../styles/FeaturesAndTraits.css";
import vanessa from "../images/self/vanessa.jpeg";
import vanessa2 from "../images/self/vanessa-2.jpeg";

function FeaturesAndTraits() {
  return (
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-7">
            <div className="d-flex flex-column align-items-md-start">
              <div className="d-flex flex-column align-items-end">
                <AnimatedComponent variants={fadeInFromLeft}>
                  <h2 className="features-traits-title component-title">
                    FEATURES & TRAITS
                  </h2>
                  </AnimatedComponent>
                  <AnimatedComponent variants={fadeInFromBottom}>
                  <h4 className="accent text-lowercase">
                    Greetings Travelers,
                  </h4>
                  </AnimatedComponent>
              </div>
            </div>
            <AnimatedComponent variants={fadeInFromBottom}>
              <div className="text-uppercase body-text">
                <div className="text-end">Let's go on an adventure!</div>I
                create things with equal focus on beauty and functionality. I
                blend my background in leadership, project management, and
                problem solving with software development, bringing a unique
                mixture of skills and perspective. I've got an admiration for
                technology, an excitement for building meaningful connections,
                and a desire to deliver impactful results. Reach out to me and
                let's weave the magic of technology to create experiences that
                reverberate across the internet.
              </div>
            </AnimatedComponent>
          </div>
          <div className="col-lg-5 d-flex flex-column justify-content-around">
            <div className="img-hover-zoom">
              <div className="zoom-container">
                <AnimatedComponent variants={slideInFromRightVariant}>
                  <img
                    src={vanessa2}
                    alt="self smiling surrounded by greenery looking down"
                    className="img-fluid ps-lg-5 pt-4 mt-2"
                  />
                </AnimatedComponent>
              </div>
              <div className="zoom-container">
                <AnimatedComponent variants={slideInFromRightVariant}>
                  <img
                    src={vanessa}
                    alt="self laughing surrounded by greenery"
                    className="img-fluid ps-lg-5 pt-3"
                  />
                </AnimatedComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default FeaturesAndTraits;
