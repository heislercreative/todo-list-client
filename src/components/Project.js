import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/projectActions'
import { Table } from 'semantic-ui-react'

import Task from './Task'

class Project extends Component {

  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    await this.props.actions.fetchProject(this.props.id)
    this.setState({ loaded: true })
  }

  render() {
    const { name, tasks } = this.props.project
    return (
      <div>
        {this.state.loaded &&
          <div>
            <h2>{name}</h2>
            <Table>
              <Table.Body>
              {tasks.map(task =>
                <Task
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  completed={task.completed}
                />
              )}
              </Table.Body>
            </Table>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    project: state.projects.selected,
    id: ownProps.match.params.projectId
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
