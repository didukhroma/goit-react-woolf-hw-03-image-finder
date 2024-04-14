import { Component } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    const { target, currentTarget } = event;

    if (currentTarget === target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <StyledOverlay onClick={this.handleBackdropClick}>
        <StyledModal>
          <img src={src} alt={alt} />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
