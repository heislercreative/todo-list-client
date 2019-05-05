import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/projectActions'
import { Header, Divider } from 'semantic-ui-react'

import ProjectBasic from './ProjectBasic'

class Projects extends Component {

  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    await this.props.actions.fetchProjects()
    this.setState({ loaded: true })
  }

  render() {
    const projects = this.props.projects
    return (
      <div>
        {this.state.loaded &&
          <div>
            <Header as='h2' textAlign='center'>
              Projects
              <Divider hidden />
            </Header>
            <div>
              {projects.map(project =>
                <ProjectBasic
                  key={project.id}
                  id={project.id}
                  name={project.name}
                />
              )}
            </div>
        </div>
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { projects: state.projects.list }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
