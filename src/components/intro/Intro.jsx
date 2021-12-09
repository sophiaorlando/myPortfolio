import './intro.scss'
import {init} from 'ityped';
import {useEffect, useRef} from 'react';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
      init(textRef.current, {
        showCursor:true,
        backDelay:1500,
        backSpeed:60,
        strings:["Software Engineer", "Tech-Nut", "UX/UI Designer", "Golfer", "Anime Lover", "Color Enthusiast"]

      })
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="theContainer">
          <div className="imgContainer">
            <img src="assets/me2.jpg" alt="" />
          </div>
        </div>

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Sophia Orlando</h1>
          <h3>Idiosyncratic <span ref={textRef}></span></h3>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
