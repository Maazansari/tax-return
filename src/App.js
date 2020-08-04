import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import forms from "./forms";
import FormWrapper from "./form-wrapper";
import GeneratedFromModal from "./generated-form-modal";

import "./App.scss";

class App extends Component {
  state = {
    showModal: false,
    allformsState: {},
  };
  toggleModal = (showModal) => {
    this.setState({ showModal });
  };
  setFormsStateByType = (name, values) => {
    this.setState((prevState) => ({
      allformsState: { ...prevState.allformsState, [name]: values },
    }));
  };
  render() {
    const { showModal, allformsState } = this.state;
    return (
      <div className="App">
        <header className="header">
          <h3>Tax Return Application</h3>
          <Button variant="info" onClick={() => this.toggleModal(true)}>
            View Tax Return
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
      </div>
    );
  }
}

export default App;
