import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../actions/projectActions'
import { Modal, Menu, Header, Button, Icon } from 'semantic-ui-react'

import ProjectForm from './ProjectForm'

class EditProject extends Component {

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
    await this.props.actions.updateProject(this.props.id)
    this.closeModal()
  }

  render() {
    const { showModal } = this.state
    const { name, id, userId } = this.props

    return(
      <Modal open={showModal} size='tiny' centered={false} trigger={
        <Menu.Item onClick={this.openModal}>
          <Icon name='edit'/> Rename Project
        </Menu.Item>}
      >
        <Header icon='edit' content="Rename Project" />
        <Modal.Content>
          <ProjectForm type={'update'} id={id} name={name} userId={userId} />
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' inverted onClick={this.closeModal}>
            <Icon name='remove' /> Cancel
          </Button>
          <Button color='blue' inverted onClick={this.handleClick}>
            <Icon name='checkmark' /> Rename
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(null, mapDispatchToProps)(EditProject))
