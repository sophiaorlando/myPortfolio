import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <Link className="link" to="/">
            <img
              src="https://sophiaorlando.github.io/static/media/profPic2.6eda464c.jpg"
              alt=""
              className="sidebarImage"
            />
          </Link>
          {/* <h3 className="sidebarTitle">Sophia Orlando</h3> */}
          <ul className="sidebarList">
            <Link to="/projects" className="link">
              <li className="sidebarListItem">Projects</li>
            </Link>
            <Link to="/mySkills" className="link">
              <li className="sidebarListItem">Tech Skills</li>
            </Link>
            <Link to="/aboutMe" className="link">
              <li className="sidebarListItem">About Me</li>
            </Link>
            <Link to="/findMe" className="link">
              <li className="sidebarListItem">Find Me</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
