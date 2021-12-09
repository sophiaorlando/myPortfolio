import './skills.scss'
import {mySkills} from '../../data'

export default function Skills() {

  const languages = mySkills[0];
  const frameworks = mySkills[1];

  const databases = mySkills[2];

  const platforms = mySkills[3];

  const hosting = mySkills[4];

  const practices = mySkills[5];

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">



      <div className="mainCard frameworks">
            <div className="skill">{frameworks.title}</div>
            <div className="card">
                {frameworks.skills.map((skill, j) => 
                  <div className="theSkills">
                    <div className="center" key={j}>{skill}</div>
                  </div>
                )}
          </div>
      </div>
      <div className="mainCard databases">
            <div className="skill">{databases.title}</div>
            <div className="card">
                {databases.skills.map((skill, j) => 
                  <div className="theSkills">
                    <div className="center" key={j}>{skill}</div>
                  </div>
                )}
          </div>
      </div>
      <div className="mainCard languages">
            <div className="skill">{languages.title}</div>
            <div className="card">
                {languages.skills.map((skill, j) => 
                  <div className="theSkills">
                    <div className="center" key={j}>{skill}</div>
                  </div>
                )}
          </div>
      </div>


      <div className="mainCard hosting">
            <div className="skill">{hosting.title}</div>
            <div className="card">
                {hosting.skills.map((skill, j) => 
                  <div className="theSkills">
                    <div className="center" key={j}>{skill}</div>
                  </div>
                )}
          </div>
      </div>
      <div className="mainCard platforms">
            <div className="skill">{platforms.title}</div>
            <div className="card">
                {platforms.skills.map((skill, j) => 
                  <div className="theSkills">
                    <div className="center" key={j}>{skill}</div>
                  </div>
                )}
          </div>
      </div>
      <div className="mainCard practices">
            <div className="skill">{practices.title}</div>
            <div className="card">
                {practices.skills.map((skill, j) => 
                  <div className="theSkills">
                    <div className="center" key={j}>{skill}</div>
                  </div>
                )}
          </div>
      </div>
        

      </div>
    </div>
  )
}


//          <div className="skill" key={i}>{title}</div>
