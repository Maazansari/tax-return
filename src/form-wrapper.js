import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import TaxFrom from "./tax-form";

class FormWrapper extends Component {
  state = {
    formValues: [{}],
  };

  onFormSubmit = () => {
    console.log(this.state.formValues);
  };
  addForm = () => {
    this.setState((prevState) => ({
      formValues: [...prevState.formValues, {}],
    }));
  };
  deleteForm = (index) => {
    this.setState((prevState) => ({
      formValues: [
        ...prevState.formValues.slice(0, index),
        ...prevState.formValues.slice(index + 1),
      ],
    }));
  };
  render() {
    const { name, formFields } = this.props;
    const { formValues } = this.state;
    return (
      <div className="form-wrapper">
        <h5>{name}</h5>

        <div className="form-container">
          {formValues.map((values, index) => (
            <TaxFrom
              formFields={formFields}
              onFormSubmit={this.onFormSubmit}
              deleteForm={this.deleteForm}
              index={index}
            />
          ))}
        </div>

        <Button
          variant="secondary"
          type="click"
          className="add-form-button"
          onClick={this.addForm}
        >
          + Add Form
        </Button>
      </div>
    );
  }
}

export default FormWrapper;
