import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/projectActions'
import { Header, Divider, Menu } from 'semantic-ui-react'

import ProjectForm from './ProjectForm'
import ProjectLink from './ProjectLink'

class Projects extends Component {

  componentDidMount() {
    this.props.actions.fetchProjects()
  }

  render() {
    const projects = this.props.projects

    // if (logged_in_confirmation) {
    // show, else redirect
    //}

    return (
      <div>
        {this.props.loaded &&
          <div>
            <Header as='h2' textAlign='center'>
              Projects
              <Divider hidden />
            </Header>
            <ProjectForm type={'create'} />
            {projects.length > 0 &&
              <Menu vertical>
                {projects.map(project =>
                  <ProjectLink
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    tasks={project.tasks}
                  />
                )}
              </Menu>
            }
        </div>
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    projects: state.projects.list,
    loaded: state.projects.listLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
