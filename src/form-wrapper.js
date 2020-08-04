import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import uniqueId from "lodash.uniqueid";
import TaxFrom from "./tax-form";

class FormWrapper extends Component {
  state = {
    formsState: [{ id: uniqueId("form-"), values: {} }],
  };

  setFormState = (id, values) => {
    this.setState(
      (prevState) => ({
        formsState: prevState.formsState.map((state) =>
          state.id === id ? { ...state, values: values } : state
        ),
      }),
      this.setFormsValuesIntoParentState
    );
  };

  setFormsValuesIntoParentState = () => {
    const { setFormsStateByType, name } = this.props;
    const { formsState } = this.state;
    setFormsStateByType(name, formsState);
  };
  addForm = () => {
    this.setState((prevState) => ({
      formsState: [...prevState.formsState, { id: uniqueId("form-") }],
    }));
  };
  deleteForm = (id) => {
    this.setState((prevState) => ({
      formsState: prevState.formsState.filter((form) => form.id !== id),
    }));
  };
  render() {
    const { name, formFields } = this.props;
    const { formsState } = this.state;
    return (
      <div className="form-wrapper">
        <h5>{name}</h5>
        <div className="form-container">
          {formsState.map((values) => (
            <TaxFrom
              formFields={formFields}
              setFormState={this.setFormState}
              deleteForm={this.deleteForm}
              id={values.id}
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
