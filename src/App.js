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

  state = { fetchComplete: false }

  async componentDidMount() {
    await this.props.actions.fetchUser()
    this.setState({ fetchComplete: true })
  }

  render() {
    const userId = this.props.userId
    const fetchComplete = this.state.fetchComplete

    return (
      <Router>
        <div className="App">
          {userId ?
            <LoggedInMenu /> : <LoggedOutMenu />
          }
          <Divider hidden />
          {fetchComplete &&
            <Container>
            {userId ?
              <Switch>
                <Route exact path='/projects' component={Projects} />
                <Route path='/projects/:projectId' component={Project} />
                <Redirect from='/login' to='/projects' />
                <Redirect from='/signup' to='/projects' />
                <Redirect from='/' to='/projects' />
              </Switch>
              :
              <Switch>
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Redirect from='/projects' to='/login' />
                <Redirect from='/projects/:projectId' to='/login' />
                <Redirect from='/' to='/login' />
              </Switch>
            }
          </Container>
          }
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
