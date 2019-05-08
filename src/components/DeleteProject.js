import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../actions/projectActions'
import { Modal, Menu, Header, Button, Icon } from 'semantic-ui-react'

class DeleteProject extends Component {
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
    await this.props.actions.deleteProject(this.props.id)
    this.props.history.push('/projects')
  }

  render() {
    const { showModal } = this.state
    const { name, tasks } = this.props

    return(
      <Modal open={showModal} size='tiny' centered={false} trigger={
        <Menu.Item onClick={this.openModal}>
          <Icon name='trash'/> Delete Project
        </Menu.Item>}
      >
        <Header icon='trash' content="Are you sure you want to delete this project and all its tasks?" />
        <Modal.Content>
          <p>{name} ({tasks.length} tasks)</p>
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

export default withRouter(connect(null, mapDispatchToProps)(DeleteProject))
