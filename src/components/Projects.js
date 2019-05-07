import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/projectActions'
import { Header, Divider } from 'semantic-ui-react'

import ProjectBasic from './ProjectBasic'

class Projects extends Component {

  componentDidMount() {
    // this.props.actions.fetchProjects(userId)
    this.props.actions.fetchProjects(1)
  }

  render() {
    const projects = this.props.projects
    return (
      <div>
        {this.props.loaded &&
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
  return {
    // userId: state.user.id,
    projects: state.projects.list,
    loaded: state.projects.listLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
