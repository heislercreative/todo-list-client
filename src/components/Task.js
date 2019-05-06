import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/taskActions'
import { Table, Checkbox } from 'semantic-ui-react'

class Project extends Component {

  render() {
    const { text, completed } = this.props
    return (
      <Table.Row>
        <Table.Cell>
          {text}
        </Table.Cell>
        <Table.Cell textAlign='right'>
          <Checkbox />
        </Table.Cell>
      </Table.Row>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(Project)
