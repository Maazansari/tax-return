import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import curry from "lodash.curry";
import uniqueId from "lodash.uniqueid";

import TextField from "./Text-field";
import closeIcon from "./images/close.svg";

class AddNewFormModal extends Component {
  state = {
    formObject: {
      name: "Form 1099",
      formFields: [
        {
          id: uniqueId("field-"),
          label: "Default",
          name: "default",
          type: "number",
        },
      ],
    },
  };
  setFormFieldsValue = (index, name, value) => {
    this.setState((prevState) => {
      const { formObject } = prevState;
      const { formFields } = formObject;
      const newFiled = { ...formFields[index], [name]: value };
      formFields.splice(index, 1, newFiled);
      return {
        formObject: {
          ...formObject,
          formFields: formFields,
        },
      };
    });
  };
  setFormName = (name, value) => {
    this.setState((prevState) => ({
      formObject: {
        ...prevState.formObject,
        name: value,
      },
    }));
  };
  addField = () => {
    const { formObject } = this.state;
    const { formFields } = formObject;
    const fieldObject = {
      id: uniqueId("field-"),
      label: "",
      name: "",
      type: "",
    };
    this.setState((prevState) => ({
      formObject: {
        ...prevState.formObject,
        formFields: [...formFields, fieldObject],
      },
    }));
  };
  onFormSubmit = () => {
    const { addNewForm } = this.props;
    addNewForm(this.state.formObject);
  };
  render() {
    const { showModal, toggleModal } = this.props;
    const { formObject } = this.state;

    return (
      <Modal show={showModal} className="modal">
        <div className="new-form-modal">
          <form className="form">
            <header className="custom-modal-header">
              <h3>Create New Form</h3>
              <img
                src={closeIcon}
                alt="close-icon"
                className="close-icon"
                onClick={() => toggleModal(false)}
              />
            </header>
            <TextField
              label={"Form Name"}
              name={"form_name"}
              type="text"
              setFieldValue={this.setFormName}
            />
            {formObject.formFields.map((field, index) => (
              <div className="fields-container" key={field.id}>
                <TextField
                  label={"Field Label"}
                  name={"label"}
                  type="text"
                  setFieldValue={curry(this.setFormFieldsValue, 3)(index)}
                />
                <TextField
                  label={"Field Name"}
                  name={"name"}
                  type="text"
                  setFieldValue={curry(this.setFormFieldsValue, 3)(index)}
                />
                <TextField
                  label={"Field Type"}
                  name={"type"}
                  type="text"
                  setFieldValue={curry(this.setFormFieldsValue, 3)(index)}
                />
              </div>
            ))}
            <Button variant="primary" type="button" onClick={this.addField}>
              + Add Field
            </Button>
            <Button variant="primary" type="button" onClick={this.onFormSubmit}>
              Create Form
            </Button>
          </form>
        </div>
      </Modal>
    );
  }
}

export default AddNewFormModal;
