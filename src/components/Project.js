import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/projectActions'
import { Segment, Grid, Menu } from 'semantic-ui-react'

import TaskForm from './TaskForm'
import Task from './Task'
import EditProject from './EditProject'
import DeleteProject from './DeleteProject'

class Project extends Component {

  componentDidMount() {
    this.props.actions.fetchProject(this.props.id)
  }

  render() {
    const { name, id, tasks } = this.props.project
    return (
      <div>
        {this.props.loaded &&
          <div>
            <h2>{name}</h2>
            <TaskForm projectId={id} />
            {tasks.length > 0 &&
              <Segment>
                <Grid container>
                  {tasks.map(task =>
                    <Task
                      key={task.id}
                      id={task.id}
                      text={task.text}
                      completion={task.completion}
                    />
                  )}
                </Grid>
              </Segment>
            }
            {/* Update userId from hard-coded number */}
            <Menu secondary>
            <EditProject id={id} name={name} userId={1} />
            <DeleteProject id={id} name={name} tasks={tasks} />
            </Menu>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // userId: state.user.id,
    project: state.projects.selected,
    loaded: state.projects.selectedLoaded,
    id: ownProps.match.params.projectId
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
