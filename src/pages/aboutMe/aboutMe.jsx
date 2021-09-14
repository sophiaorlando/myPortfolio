import React from "react";
import "./aboutMe.css";
import Orbit from "../../components/orbit/Orbit";
import Fade from "react-reveal/Fade";

function aboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMeSection">
        <Fade left cascade>
          <div className="theRow">
            <div className="theCol">
              <div className="left-column">
                My love for programming started when I first saw, "Hello World",
                pop up on the screen from a console.log. This newfound
                excitement for programming propelled me into a digital world
                that I have never left. I've been able to work in a vast
                spectrum of web technologies and languages which gives me a
                creative edge as to how I approach complex problems and how I
                solve them.
              </div>
            </div>
            <div className="theCol">
              <div className="right-column">
                {" "}
                And yes, if I'm not working, you will probably still find me at
                my computer desk, creatively coding and falling deeper into the
                limitless black hole that is programming. However, on the off
                chance I'm not coding in my freetime, you can find me biking to
                the beach, singing in the car to, "Piece of My Heart" by Janis
                Joplin or listening to my favorite records on vinyl.
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Fade>
        <Orbit />
      </Fade>
    </div>
  );
}

export default aboutMe;
