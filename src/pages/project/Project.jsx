import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
import "./project.css";
import rockerImg from "../../images/homePageImg/rocker-img.png";

function Project() {
  const { handle } = useParams();
  const location = useLocation();
  const { item } = location.state;
  const [proj, setProj] = React.useState(null);
  const data = [
    {
      image: item.image1,
      caption: item.title,
    },
    {
      image: item.image2,
      caption: item.title,
    },
    {
      image: item.image3,
      caption: item.title,
    },
    {
      image: item.image4,
      caption: item.title,
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  React.useEffect(() => {
    fetch(`http://localhost:3000/projects/${handle}`).then(setProj);
    console.log(item);
  }, [handle]);
  // console.log(item);

  return (
    <div className="project">
      <div id="projContainer">
        <div className="projectTitle">{item.title}</div>
        <div className="gitHubBtn" onClick={() => window.open(item.projGitHub)}>
          Github
        </div>
      </div>
      <Carousel
        data={data}
        // time={9000}
        width="850px"
        height="500px"
        captionStyle={captionStyle}
        radius="40px"
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={false}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="rgb(236, 183, 234)"
        slideImageFit="contain"
        thumbnails={false}
        thumbnailWidth="0px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "20px auto",
        }}
      />

      <div className="projText">{item.projText}</div>
    </div>
  );
}

export default Project;
