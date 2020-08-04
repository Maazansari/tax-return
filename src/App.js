import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import forms from "./forms";
import FormWrapper from "./form-wrapper";
import GeneratedFromModal from "./generated-form-modal";

import "./App.scss";

class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = (showModal) => {
    this.setState({ showModal });
  };
  render() {
    const { showModal } = this.state;
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
            <FormWrapper {...form} key={form.name} />
          ))}
        </div>
        <GeneratedFromModal
          showModal={showModal}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
