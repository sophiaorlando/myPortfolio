import React from "react";
import "./orbit.css";

function orbit() {
  return (
    <div className="orbit">
      <div id="circle-orbit-container">
        {/* <!-- Circles closest to the central point --> */}
        <div id="first-orbit">
          <div className="first-orbit-cirlces"></div>
        </div>
        {/* <!-- Circles closest to the central point --> */}
        <div id="inner-orbit">
          <div className="inner-orbit-cirlces"></div>
        </div>

        {/* <!-- Circles second closest to the central point --> */}
        <div id="middle-orbit">
          <div className="middle-orbit-cirlces"></div>
        </div>
        {/* <!-- Circles second closest to the central point --> */}
        <div id="third-orbit">
          <div className="third-orbit-cirlces"></div>
        </div>
        {/* <!-- Circles second closest to the central point --> */}
        <div id="fourth-orbit">
          <div className="fourth-orbit-cirlces"></div>
        </div>

        {/* <!-- Circles furthest away to the central point --> */}
        <div id="outer-orbit">
          <div className="outer-orbit-cirlces"></div>
        </div>
      </div>
    </div>
  );
}

export default orbit;
