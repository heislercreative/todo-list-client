import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Sticky, Icon } from 'semantic-ui-react'

class LoggedOutMenu extends Component {
  state = {}

  handleMenuClick = (e, { name }) => this.setState({
    activeItem: name
  })

  render() {
    const { activeItem } = this.state

    return(
      <Sticky>
        <Menu inverted>
          <Menu.Item>
            <Icon name='clipboard'/>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              as={Link} to='/signup'
              name='signup'
              active={activeItem === 'signup'}
              onClick={this.handleMenuClick}
            >
              Sign Up
            </Menu.Item>
            <Menu.Item
              as={Link} to='/login'
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleMenuClick}
            >
              Log In
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
    )
  }
}

export default LoggedOutMenu
