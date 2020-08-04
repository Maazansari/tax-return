import React, { Component } from "react";

class GeneratedForm extends Component {
  render() {
    const { name, formFields } = this.props;
    return (
      <div
        className={`generated-form ${name === "Form 1040" ? "form1040" : ""}`}
      >
        <h5>{name}</h5>
        {formFields.map((field) => (
          <div className="field">
            <div>{field.label}</div>
            <div>{`${field.value}$`}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default GeneratedForm;
