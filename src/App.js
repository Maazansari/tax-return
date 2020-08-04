import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import forms from "./forms";
import FormWrapper from "./form-wrapper";
import CreateFormModal from "./add-form-modal";
import GeneratedFromModal from "./generated-form-modal";

import "./App.scss";

class App extends Component {
  state = {
    showModal: false,
    showNewFormModal: false,
    allformsState: {},
    forms: forms,
  };
  toggleModal = (showModal) => {
    this.setState({ showModal });
  };
  toggleNewFormModal = (showNewFormModal) => {
    this.setState({ showNewFormModal });
  };
  setFormsStateByType = (name, values) => {
    this.setState((prevState) => ({
      allformsState: { ...prevState.allformsState, [name]: values },
    }));
  };

  addNewForm = (form) => {
    this.setState((prevState) => ({ forms: [...prevState.forms, form] }));
    this.toggleNewFormModal(false);
  };
  render() {
    const { showModal, allformsState, forms, showNewFormModal } = this.state;
    return (
      <div className="App">
        <header className="header">
          <h3>Tax Return Application</h3>
          <Button variant="info" onClick={() => this.toggleModal(true)}>
            View Tax Return
          </Button>
          <Button variant="info" onClick={() => this.toggleNewFormModal(true)}>
            Add New Form
          </Button>
        </header>
        <div className="body">
          {forms.map((form) => (
            <FormWrapper
              {...form}
              key={form.name}
              setFormsStateByType={this.setFormsStateByType}
            />
          ))}
        </div>
        {showModal && (
          <GeneratedFromModal
            showModal={showModal}
            toggleModal={this.toggleModal}
            allformsState={allformsState}
          />
        )}
        {showNewFormModal && (
          <CreateFormModal
            addNewForm={this.addNewForm}
            toggleModal={this.toggleNewFormModal}
          />
        )}
      </div>
    );
  }
}

export default App;
