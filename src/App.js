import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/userActions'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, Redirect } from 'react-router'
import { Container, Divider } from 'semantic-ui-react'
import './App.css'

import LoggedInMenu from './components/LoggedInMenu'
import LoggedOutMenu from './components/LoggedOutMenu'
import Signup from './components/Signup'
import Login from './components/Login'
import Projects from './components/Projects'
import Project from './components/Project'

class App extends Component {

  componentDidMount() {
    this.props.actions.fetchUser()
  }

  render() {
    const userId = this.props.userId

    return (
      <Router>
        <div className="App">
          {userId ?
            <LoggedInMenu /> : <LoggedOutMenu />
          }
          <Divider hidden />
          <Container>
          {userId ?
            <Switch>
              <Route exact path='/projects' component={Projects} />
              <Route path='/projects/:projectId' component={Project} />
              <Redirect from='/' to='/projects' />
              <Redirect from='/login' to='/projects' />
              <Redirect from='/signup' to='/projects' />
            </Switch>
            :
            <Switch>
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
              <Redirect from='/' to='/login' />
              <Redirect from='/projects' to='/login' />
              <Redirect from='/projects/:projectId' to='/login' />
            </Switch>
          }
          </Container>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.current.id
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
