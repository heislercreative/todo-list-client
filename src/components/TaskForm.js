import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/taskActions'
import { Form, Icon } from 'semantic-ui-react'

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    this.props.actions.createTask(this.props.projectId)
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      this.props.actions.createTask(this.props.projectId)
    }
  }

  render(){
    return(
      <div className='form-container'>
        <Form id='task-form'>
          <Form.Field>
            <Form.Input
              name='text'
              type='text'
              placeholder='Add a task...'
              icon={<Icon name='plus' link onClick={this.handleClick}/>}
              value={this.state.text}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </Form.Field>
          <Form.Field>
            <input
              name='project_id'
              type='hidden'
              value={this.props.projectId}
            />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(null, mapDispatchToProps)(TaskForm))
