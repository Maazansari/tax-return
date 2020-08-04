import React, { Component } from "react";

class GeneratedForm extends Component {
  render() {
    console.log(this.props);
    const { name, formFields } = this.props;
    return (
      <div className="generated-form">
        <h5>{name}</h5>
        {formFields.map((field) => (
          <div className="field">
            <div>{field.label}</div>
            <div>{field.value}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default GeneratedForm;
