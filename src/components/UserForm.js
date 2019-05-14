import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form } from 'semantic-ui-react'

class UserForm extends Component {
  constructor(props) {
    super(props)
    if (props.formType === 'createUser') {
      this.state = {
        'user[email]': '',
        'user[password]': '',
        password_placeholder: '•••••••',
        'user[first_name]': '',
        'user[last_name]': ''
      }
    } else if (props.formType === 'updateUser') {
      this.state = {
        'user[email]': props.user.email,
        'user[password]': '',
        password_placeholder: 'Please re-enter or change password',
        'user[first_name]': props.user.first_name,
        'user[last_name]': props.user.last_name
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (this.props.formType === 'createUser') {
      this.props.actions.createUser()
    } else if (this.props.formType === 'updateUser') {
      await this.props.actions.updateUser(this.props)
      this.props.history.push('/account-confirmation')
    }
  }

  render(){
    return(
      <div className='form-container'>
        <Form id="user-form" onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Field className='form-field'>
              <label>Email</label>
              <input
                name='user[email]'
                type='text'
                placeholder='name@website.com'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field className='form-field'>
              <label>Password</label>
              <input
                name='user[password]'
                type='password'
                placeholder={this.state.password_placeholder}
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field className='form-field'>
              <label>First Name</label>
              <input
                name='user[first_name]'
                type='text'
                placeholder='Jane'
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field className='form-field'>
              <label>Last Name</label>
              <input
                name='user[last_name]'
                type='text'
                placeholder='Doe'
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <br />
          <Form.Button
            primary
            inverted
            type='submit'
            disabled={!this.state['user[email]']
              || !this.state['user[password]']
              || !this.state['user[first_name]']
              || !this.state['user[last_name]']}>
              Submit
          </Form.Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user.current }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserForm))
