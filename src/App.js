import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Project from './pages/project/Project';
import MySkills from './pages/mySkills/mySkills';
import AboutMe from './pages/aboutMe/aboutMe';
import FindMe from './pages/findMe/FindMe';
import EmailMe from './pages/emailMe/EmailMe';





function App() {
  return (
    <Router className="App">
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home className="homeCSS" />
          </Route>
          <Route path="/projects/:projectId">
            <Project />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/mySkills">
            <MySkills />
          </Route>
          <Route path="/aboutMe">
            <AboutMe />
          </Route>
          <Route path="/findMe">
            <FindMe />
          </Route>
          <Route path="/emailMe">
            <EmailMe />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
