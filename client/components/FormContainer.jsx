import React, { Component, useState } from 'react';
import { FormModal } from './FormModal';
// import AddMeButton from '';

function FormContainer (props)  {
    
    const [isShown, setIsShown] = useState(false)

//   state = { isShown: false };

  const showModal = () => {
    this.setIsShown(true), 
    // () => {
    //   this.closeButton.focus();
    // });
    this.toggleScrollLock();
  };

  const closeModal = () => {
    this.setIsShown(false);
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  const onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  const toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

    return (
      <React.Fragment>
        <button  onclick = {showModal}> push me!</button>
          <FormModal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (closeButton = n)}
            closeModal={closeModal}
            onKeyDown={onKeyDown}
            onClickOutside={onClickOutside}
          />
        ) : null}
      </React.Fragment>
    );

}

export default FormContainer;