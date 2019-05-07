import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/taskActions'
import { Modal, Menu, Header, Button, Icon } from 'semantic-ui-react'

class DeleteTask extends Component {
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

  handleClick = () => {
    this.props.actions.deleteTask(this.props.id)
  }

  render() {
    const { showModal } = this.state
    const { text } = this.props

    return(
      <Modal open={showModal} size='tiny' centered={false} trigger={
        <Menu.Item onClick={this.openModal}>
          <Icon name='remove'/>
        </Menu.Item>}
      >
        <Header icon='trash' content="Are you sure you want to delete this task?" />
        <Modal.Content>
          <p>{text}</p>
        </Modal.Content>
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

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(DeleteTask)
