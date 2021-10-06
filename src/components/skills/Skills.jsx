import React from "react";
import "./skills.css";
import Fade from "react-reveal/Fade";

function skills() {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="some-page-wrapper">
        <div className="row">
          <div className="column">
            <div className="blue-column">
              <Fade bottom>
                <h1>Languages</h1>
                <ul className="skillsMenu">
                  <li className="skillsList">HTML5</li>
                  <li className="skillsList">CSS</li>
                  <li className="skillsList">JavaScript</li>
                  <li className="skillsList">Sass</li>
                  <li className="skillsList">TypeScript</li>
                  <li className="skillsList">WordPress</li>
                  <li className="skillsList">Java</li>
                </ul>
                <h1>Frameworks</h1>

                <ul className="skillsMenu">
                  <li className="skillsList">Bootstrap</li>
                  <li className="skillsList">Angular</li>
                  <li className="skillsList">React-Bootstrap</li>
                  <li className="skillsList">Material-UI</li>
                  <li className="skillsList">NodeJS</li>
                  <li className="skillsList">Express</li>
                  <li className="skillsList">Selenium</li>
                </ul>
                <h1>Hosting Platforms</h1>

                <ul className="skillsMenu">
                  <li className="skillsList">Apple Store</li>
                  <li className="skillsList">Heroku</li>
                  <li className="skillsList">AWS</li>
                  <li className="skillsList">GCP</li>
                  <li className="skillsList">Firebase</li>
                  <li className="skillsList">Netlify</li>
                  <li className="skillsList">Github Pages</li>
                </ul>
              </Fade>
            </div>
          </div>

          <div className="column">
            <div className="green-column">
              <Fade bottom>
                <h1>Libraries</h1>
                <ul className="skillsMenu">
                <li className="skillsList">React Native</li>
                  <li className="skillsList">ReactJS</li>
                  <li className="skillsList">Redux</li>
                  <li className="skillsList">React Router</li>
                  <li className="skillsList">MomentJS</li>
                  <li className="skillsList">styled-components</li>
                  <li className="skillsList">jQuery</li>
                </ul>
                <h1>Databases</h1>
                <ul className="skillsMenu">
                  <li className="skillsList">MongoDB</li>
                  <li className="skillsList">SQL</li>
                  <li className="skillsList">SOAPUI</li>
                </ul>
                <h1>Other Tools</h1>
                <ul className="skillsMenu">
                  <li className="skillsList">Adobe Creative Cloud</li>
                  <li className="skillsList">IntelliJ</li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
