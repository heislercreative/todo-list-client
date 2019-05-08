import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/projectActions'
import { Form, Icon } from 'semantic-ui-react'

class ProjectForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    if (this.props.type === 'create') {
      this.props.actions.createProject(this.props.userId)
    }
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
    const { type, name, userId } = this.props

    return(
      <div className='form-container'>
        <Form id='project-form'>
          <Form.Field>
            {type === 'create' ?
              <Form.Input
                name='name'
                type='text'
                placeholder='Create a project...'
                icon={<Icon name='plus' link onClick={this.handleClick}/>}
                value={this.state.text}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            :
              <Form.Input
                name='name'
                type='text'
                placeholder={name}
                value={this.state.text}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            }
          </Form.Field>
          <Form.Field>
            <input
              name='user_id'
              type='hidden'
              value={userId}
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

export default withRouter(connect(null, mapDispatchToProps)(ProjectForm))