import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Sticky, Icon } from 'semantic-ui-react'

import Logout from './Logout'

class TopMenu extends Component {
  state = {}

  handleMenuClick = (e, { name }) => this.setState({
    activeItem: name
  })

  render() {
    const { activeItem } = this.state

    return(
      <Menu>
        <Menu.Item
          as={Link} to='/projects'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleMenuClick}
        >
          <Icon name='clipboard'/> Projects
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            as={Link} to='/account'
            name='account'
            active={activeItem === 'account'}
            onClick={this.handleMenuClick}
          >
            <Icon name='user circle'/>
          </Menu.Item>
          <Logout />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default TopMenu
