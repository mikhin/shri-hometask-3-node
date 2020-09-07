import Modal from 'react-modal';

const propTypes = {
  children: PropTypes.node,
  isModalOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

class NewBuildModal extends React.Component {
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
        className={b('new-build-modal')}
        ariaHideApp={false}
      >
        {children}
      </Modal>);
  }
}

NewBuildModal.propTypes = propTypes;

export default NewBuildModal;
