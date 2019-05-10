import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'
import { Header, Container, Form, Button, Divider } from 'semantic-ui-react'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  redirect = () => {
    if (this.props.user.id) {
      this.props.history.push('/projects')
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.props.actions.loginUser()
    setTimeout(this.redirect, 1000)
  }

  handleFacebookResponse = (response) => {
    this.props.actions.loginFacebook(response)
  }

  render() {
    return(
      <Container text>
        <Header as='h2' textAlign='center'>
          Log In To Your Account
          <Divider hidden />
        </Header>
        <div className='login-form-container'>
          <Form id="login-form" onSubmit={this.handleSubmit}>
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
                placeholder='••••••••'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Field>
            <br />
            <Button
              primary
              inverted
              type='submit'
              disabled={!this.state.email || !this.state.password}
            >
              Log In
            </Button>
          </Form>
        </div>

        <Divider horizontal section>OR</Divider>
        <FacebookLogin
          appId={2178279118923624}
          textButton="Log In with Facebook"
          size="small"
          autoLoad={false}
          fields="email,first_name,last_name"
          callback={this.handleFacebookResponse}
        />
        <Divider horizontal section>OR</Divider>
        <Button as={Link} to='/signup' secondary inverted>Sign Up</Button>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user.current }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
