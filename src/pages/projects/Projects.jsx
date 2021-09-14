import React, { useState } from "react";
import "./projects.css";
import { projectData } from "../../projectData";
import Menu from "../../components/menu/Menu";
import ButtonFilter from "../../components/button-filter/ButtonFilter";
import Fade from "react-reveal/Fade";

const allCategories = [
  "All",
  ...new Set(projectData.map((project) => project.category)),
];
// console.log(allCategories);

export default function Projects() {
  const [projectItem, setProjectItem] = useState(projectData);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setProjectItem(projectData);
      return;
    }

    const filteredProjects = projectData.filter(
      (project) => project.category === button
    );
    setProjectItem(filteredProjects);
  };

  return (
    <div className="projects">
      <Fade>
        <ButtonFilter button={buttons} filter={filter} />
      </Fade>
      <Menu projectItem={projectItem} />
    </div>
  );
}
