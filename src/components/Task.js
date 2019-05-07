import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/taskActions'
import { Grid, Checkbox } from 'semantic-ui-react'

import DeleteTask from './DeleteTask'

class Task extends Component {

  render() {
    const { id, text, completed } = this.props
    return (
      <Grid.Row>
        <Grid.Column width={11} textAlign='left'>
          {text}
        </Grid.Column>
        <Grid.Column width={2}>
          <Checkbox />
        </Grid.Column>
        <Grid.Column width={1}>
          <DeleteTask id={id} text={text} />
        </Grid.Column>
      </Grid.Row>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(Task)
