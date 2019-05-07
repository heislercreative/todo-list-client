import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/projectActions'
import { Segment, Grid } from 'semantic-ui-react'

import TaskForm from './TaskForm'
import Task from './Task'

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
            <Segment>
              <Grid container>
                {tasks.map(task =>
                  <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                  />
                )}
              </Grid>
            </Segment>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    project: state.projects.selected,
    loaded: state.projects.selectedLoaded,
    id: ownProps.match.params.projectId
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
