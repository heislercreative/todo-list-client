import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../actions/userActions'
import { Modal, Menu, Header, Button, Icon } from 'semantic-ui-react'

class Logout extends Component {
  constructor(){
    super()
    this.state = {
      showModal: false
    }
  }

  openModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  handleClick = async () => {
    await this.props.actions.logoutUser()
    this.props.history.push('/login')
    this.setState({ showModal: false })
  }

  render() {
    const { showModal } = this.state

    return(
      <Modal open={showModal} size='tiny' centered={false} trigger={
        <Menu.Item onClick={this.openModal}>
          <Icon name='sign-out'/>
        </Menu.Item>}
      >
        <Header icon='sign-out' content="Are you sure you want to log out?" />
        <Modal.Actions>
          <Button color='red' inverted onClick={this.closeModal}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={this.handleClick}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return { session: state.session }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout))
