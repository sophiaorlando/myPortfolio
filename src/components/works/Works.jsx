import './works.scss'
import {GitHub, OpenInNew} from '@material-ui/icons';
import '../../data';
import {useState} from 'react';

export default function Works({details}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // console.log(details)
  const data = [];
  data.push(details.images);
  // console.log(data[0]);
  console.log(data[0] == null)

  const handleClick = (direction) => {
    direction === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
    : setCurrentSlide(currentSlide< data[0].length - 1? currentSlide+1 : 0)
  }



  return (
    <div className="works" id="works">
     {data[0] == null ? <h1>Click on a project to see me populate!</h1> :  

      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
      {data[0]?.map((d) => (
        <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <h2>{details.title}</h2>
              <p>
                {details.desc}
              </p>
              <div className="iconContainer">
              <span><GitHub fontSize="large"/></span>
              <span><OpenInNew  fontSize="large"/></span>
              </div>
            </div>
          </div>
          <div className="right">
            
            <img src={d} alt="" />

           
          </div>
        </div>
      </div>
    ))}
      </div>
      } 
      <img src="./assets/down.png" alt="" className="arrow left" onClick={() => handleClick("left")}/>
      <img src="./assets/down.png" alt="" className="arrow right"  onClick={() => handleClick("right")}/>

    </div>
  )
}
