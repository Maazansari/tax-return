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
  onFormSubmit = () => {
    const { id, setFormState } = this.props;
    const { formValues } = this.state;
    setFormState(id, formValues);
  };
  render() {
    const { formFields, deleteForm, id } = this.props;
    const { formValues } = this.state;
    return (
      <div>
        <form className="form">
          {id && <h6>{`ID: #${id}`}</h6>}
          {formFields.map((field) => (
            <TextField
              {...field}
              setFieldValue={this.setFieldValue}
              key={field.name}
              value={formValues[field.name]}
            />
          ))}
          <Button variant="primary" type="button" onClick={this.onFormSubmit}>
            Submit
          </Button>
          <Button variant="danger" type="button" onClick={() => deleteForm(id)}>
            Delete Form
          </Button>
        </form>
      </div>
    );
  }
}

export default TaxForm;
