import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/taskActions'
import { Grid, Checkbox, Icon } from 'semantic-ui-react'

class Task extends Component {

  render() {
    const { text, completed } = this.props
    return (
      <Grid.Row>
        <Grid.Column width={11} textAlign='left'>
          {text}
        </Grid.Column>
        <Grid.Column width={2}>
          <Checkbox />
        </Grid.Column>
        <Grid.Column width={1}>
          <Icon name='remove' />
        </Grid.Column>
      </Grid.Row>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(Task)
