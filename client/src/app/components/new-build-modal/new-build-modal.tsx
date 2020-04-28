import Modal from 'react-modal';

import * as React from "react";

interface propTypes {
  children: React.ReactNode,
  isModalOpen: boolean,
  onClose: CallbackFunction,
}

class NewBuildModal extends React.Component<propTypes, null> {
  componentDidMount() {
    Modal.setAppElement(document.querySelector('body'));
  }

  render() {
    const {
      children,
      isModalOpen,
      onClose,
    } = this.props;

    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onClose}
        className={b('new-commit-modal')}
        ariaHideApp={false}
      >
        {children}
      </Modal>);
  }
}

export default NewBuildModal;
