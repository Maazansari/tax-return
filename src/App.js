import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import forms from "./forms";
import FormWrapper from "./form-wrapper";
import CreateFormModal from "./add-form-modal";
import GeneratedFromModal from "./generated-form-modal";

import "./App.scss";

class App extends Component {
  state = {
    showgeneratedFormModal: false,
    showNewFormModal: false,
    forms: forms,
  };
  toggleModal = (showgeneratedFormModal) => {
    this.setState({ showgeneratedFormModal });
  };
  toggleNewFormModal = (showNewFormModal) => {
    this.setState({ showNewFormModal });
  };
  addNewForm = (form) => {
    this.setState((prevState) => ({ forms: [...prevState.forms, form] }));
    this.toggleNewFormModal(false);
  };
  render() {
    const {
      showgeneratedFormModal,
      allformsState,
      forms,
      showNewFormModal,
    } = this.state;
    const { isAdmin } = this.props;
    return (
      <div className="App">
        <header className="header">
          <h3>Tax Return Application</h3>
          {isAdmin && (
            <Button
              variant="info"
              onClick={() => this.toggleNewFormModal(true)}
            >
              Add New Form
            </Button>
          )}
          <Button variant="info" onClick={() => this.toggleModal(true)}>
            View Tax Return
          </Button>
        </header>
        <div className="body">
          {forms.map((form) => (
            <FormWrapper {...form} key={form.name} />
          ))}
        </div>

        <GeneratedFromModal
          showModal={showgeneratedFormModal}
          toggleModal={this.toggleModal}
          allformsState={allformsState}
        />

        <CreateFormModal
          addNewForm={this.addNewForm}
          toggleModal={this.toggleNewFormModal}
          showModal={showNewFormModal}
        />
      </div>
    );
  }
}

export default App;
