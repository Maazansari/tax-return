import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import TextField from "./Text-field";
class TaxForm extends Component {
  state = { formValues: {} };
  setFieldValue = (name, value) => {
    this.setState((prevState) => ({
      formValues: { ...prevState.formValues, [name]: value },
    }));
  };
  onFormSubmit = () => {};
  render() {
    const { formFields, onFormSubmit, index, deleteForm } = this.props;
    return (
      <div>
        <form className="form">
          <h6>{`#${index + 1}`}</h6>
          {formFields.map((field) => (
            <TextField
              {...field}
              setFieldValue={this.setFieldValue}
              key={field.name}
            />
          ))}
          <Button
            variant="primary"
            type="button"
            onClick={() => onFormSubmit(index)}
          >
            Submit
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={() => deleteForm(index)}
          >
            Delete Form
          </Button>
        </form>
      </div>
    );
  }
}

export default TaxForm;
