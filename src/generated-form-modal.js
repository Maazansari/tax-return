import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import GeneratedForm from "./generated-form";
import mockResponse from "./generated-api-mock-response";
import { getTaxableIncomeFor1099 } from "./utils";
import closeIcon from "./images/close.svg";
class GeneratedFormModal extends Component {
  componentDidMount() {
    const { allformsState } = this.props;
    console.log(allformsState);
    let form1099Values = allformsState["Form 1099"] || [];
    const formW2Values = allformsState["Form W-2"] || [];
    form1099Values = form1099Values.map((formData) => ({
      ...formData,
      values: {
        ...formData.values,
        taxableIncome: getTaxableIncomeFor1099(formData.values),
      },
    }));
    console.log(form1099Values, formW2Values);
  }

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
