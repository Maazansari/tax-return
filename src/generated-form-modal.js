import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import GeneratedForm from "./generated-form";
import mockResponse from "./generated-api-mock-response";

import closeIcon from "./images/close.svg";
class GeneratedFormModal extends Component {
  render() {
    const { showModal, toggleModal } = this.props;
    return (
      <Modal show={showModal} className="modal">
        <div className="final-form">
          <header>
            <h3>Tax Calculation</h3>
            <img
              src={closeIcon}
              alt="close-icon"
              className="close-icon"
              onClick={() => toggleModal(false)}
            />
          </header>

          {mockResponse.map((item) => (
            <GeneratedForm {...item} />
          ))}
        </div>
      </Modal>
    );
  }
}

export default GeneratedFormModal;
