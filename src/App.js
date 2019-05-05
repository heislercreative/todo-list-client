import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Signup from './components/Signup'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
