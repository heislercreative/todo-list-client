import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/taskActions'
import { Segment, Icon } from 'semantic-ui-react'

class Project extends Component {

  render() {
    const { text, completed } = this.props
    return (
      <Segment>
        <p>
          {text}
          <Icon name='remove' />
        </p>
      </Segment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(Project)
