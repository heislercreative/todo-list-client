import React, { Component } from 'react'
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
      text: e.target.value
    })
  }

  handleSubmit = async () => {
    await this.props.actions.createTask(this.props.projectId)
    this.setState({ text: '' })
  }

  handleClick = () => {
    this.handleSubmit()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      this.handleSubmit()
    }
  }

  render(){
    return(
      <div className='form-container'>
        <Form id='task-form'>
          <Form.Field>
            <Form.Input
              name='task[text]'
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
              name='task[project_id]'
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

export default connect(null, mapDispatchToProps)(TaskForm)
