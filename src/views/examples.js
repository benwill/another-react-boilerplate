import React, { Component } from 'react'

// Components
import Collapse from '../components/collapse/collapse'
import Modal from '../components/modal/modal'

export default class Examples extends Component {
  constructor() {
    super()
    this.state = { modalOpen: true }
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.setState(
      { modalOpen: false }
    )
  }

  render() {
    const { modalOpen, closeModal } = this.state

    return (
      <div>
        <hr />
        <Collapse title="Some Heading" open={modalOpen}>
          <span>Hello</span>
        </Collapse>
        <Collapse title="Some Heading">
          <Collapse title="Some Heading">
            <span>Nested example</span>
          </Collapse>
        </Collapse>

        <Modal title="Some Title" open={modalOpen} onClose={closeModal}>
          Some content here...
        </Modal>
      </div>
    )
  }
}
