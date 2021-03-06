import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'
import { Header, Container, Button, Divider } from 'semantic-ui-react'
import UserForm from './UserForm'


class Signup extends Component {
  render() {
    return(
      <Container text>
        <Header as='h2' textAlign='center'>
          Create a New Account
          <Divider hidden />
        </Header>
        <UserForm formType={'createUser'} />
        <Divider horizontal section>OR</Divider>
        <FacebookLogin
          appId={2178279118923624}
          textButton="Sign Up with Facebook"
          size="small"
          autoLoad={false}
          fields="email,first_name,last_name"
          callback={this.handleFacebookResponse}
        />
        <Divider horizontal section>OR</Divider>
        <Button as={Link} to='/login' secondary inverted>Log In</Button>
      </Container>
    )
  }
}

export default Signup
