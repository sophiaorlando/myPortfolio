import './projects.scss'
import ProjectList from '../projectList/ProjectList'
import {useState, useEffect} from 'react';
import {featuredProjects, webProjects, mobileProjects, uXProjects, coolStuff} from '../../data.js'
import ProjectDetails from '../projectDetails/ProjectDetails';

export default function Projects({details, setDetails}) {

  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  const list = [
    {
      id:"featured",
      title:"Featured"
    },
    {
      id: "web",
      title:"Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    // {
    //   id: "ux",
    //   title: "UX/UI"
    // },
    // {
    //   id: "cool",
    //   title: "Other Cool Stuff"
    // }

  ]

  useEffect(()=> {
    switch(selected){
      case "featured":
        setData(featuredProjects);
        break;
        case "web":
          setData(webProjects);
          break;
          case "mobile":
            setData(mobileProjects);
            break;
            // case "ux":
            //   setData(uXProjects);
            //   break;
            //   case "cool":
            //     setData(coolStuff);
            //     break;
                default:
                  setData(featuredProjects)
      
    }

  },[selected])
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map(item => (
          <ProjectList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => {
        return <a href="#works"><div className="item" key={d.id}
        onClick={()=> setDetails(d)}>
           <img src={d.img} alt="" />
            <h3>{d.title}</h3>
        </div></a>
        })}
            {/* <ProjectDetails value = {details}/> */}

      </div>
    </div>
  )
}
