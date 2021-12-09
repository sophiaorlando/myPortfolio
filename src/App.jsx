import TopBar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Works from './components/works/Works'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'


import './app.scss'
import { useState } from 'react'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [details, setDetails] = useState({})

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Projects details={details} setDetails={setDetails}/>
        <Works details={details} setDetails={setDetails}/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
