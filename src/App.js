import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import './App.css'

import TopMenu from './components/TopMenu'
import Signup from './components/Signup'
import Projects from './components/Projects'
import Project from './components/Project'

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Divider hidden />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:projectId" component={Project} />
      </div>
    </Router>
  );
}

export default App;
