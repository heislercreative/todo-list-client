import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Sticky, Icon } from 'semantic-ui-react'

import Logout from './Logout'

class LoggedInMenu extends Component {
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
          <Menu.Item
            as={Link} to='/projects'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleMenuClick}
          >
            Projects
          </Menu.Item>
          <Menu.Menu position='right'>
            <Logout />
          </Menu.Menu>
        </Menu>
      </Sticky>
    )
  }
}

export default LoggedInMenu
