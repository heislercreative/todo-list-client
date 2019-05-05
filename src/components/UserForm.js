import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form, Button } from 'semantic-ui-react'

class AccountForm extends Component {
  constructor(props) {
    super(props)
    if (props.formType === 'createUser') {
      this.state = {
        email: '',
        password: '',
        password_placeholder: '•••••••',
        first_name: '',
        last_name: ''
      }
    } else if (props.formType === 'updateUser') {
      this.state = {
        email: props.user.email,
        password: '',
        password_placeholder: 'Please re-enter or change password',
        first_name: props.user.first_name,
        last_name: props.user.last_name
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
      await this.props.actions.createUser()
      this.props.history.push('/projects')
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
            <Form.Field>
              <label>Email</label>
              <input
                name='email'
                type='text'
                placeholder='name@website.com'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                name='password'
                type='password'
                placeholder={this.state.password_placeholder}
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>First Name</label>
              <input
                name='first_name'
                type='text'
                placeholder='Jane'
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                name='last_name'
                type='text'
                placeholder='Doe'
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>



          <br />
          <Button primary type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountForm))
