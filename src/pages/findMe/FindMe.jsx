import React from "react";
import "./findMe.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function FindMe() {
  function gitHub() {
    window.open("https://github.com/sophiaorlando");
  }

  function linkedIn() {
    window.open("https://www.linkedin.com/in/sophia-m-orlando");
  }

  function resume() {
    window.open(
      "https://docs.google.com/document/d/e/2PACX-1vQbBwHs8eaJ_OA-7Q2nhNal1a0ujE4c6v-nVUkNQGxKp5gswynyG8Q4Q-kohb1vmJl5GKuWjk34djuY/pub"
    );
  }

  return (
    <div className="findMe">
      <div className="findMe-wrapper">
        <div className="findMe-row">
          <div className="findMe-column">
            <div className="findMe-right-column">
              <Fade bottom cascade>
                <div>
                  <ul className="findMe-menu">
                    <li className="findMe-list" onClick={gitHub}>
                      <div className="findMe-name">Github</div>
                    </li>
                  </ul>

                  <ul className="findMe-menu">
                    <li className="findMe-list" onClick={resume}>
                      <div className="findMe-name">Resume</div>
                    </li>
                  </ul>
                </div>
              </Fade>
            </div>
          </div>

          <div className="findMe-column">
            <div className="findMe-left-column">
              <Fade bottom cascade>
                <div>
                  <ul className="findMe-menu">
                    <li className="findMe-list" onClick={linkedIn}>
                      <div className="findMe-name">Linked In</div>
                    </li>{" "}
                  </ul>
                  <ul className="findMe-menu">
                    <Link to="/emailMe" className="link">
                      <li className="findMe-list">
                        <div className="findMe-name">Email Me</div>
                      </li>
                    </Link>
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindMe;
