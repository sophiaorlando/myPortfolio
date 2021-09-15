import React, { useRef } from "react";
import "./home.css";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div className="home">
      {/* <div className="heroText">Sophia Orlando</div> */}
      <div className="area">
        <Fade left cascade>
          <div className="heroText">Sophia Orlando</div>
          <div className="heroSubText">Idiosyncratic Full Stack Engineer</div>
        </Fade>

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
