import React from "react";

const TextField = (props) => {
  const { label, name, placeholder, value, type, setFieldValue } = props;
  return (
    <div>
      <div className="form-group">
        <label className="form-label">{label}</label>
        <input
          placeholder={placeholder || ""}
          type={type || "number"}
          id={name}
          className="form-control"
          value={value || ""}
          onChange={(e) =>
            setFieldValue(
              name,
              type === "number" ? parseFloat(e.target.value) : e.target.value
            )
          }
        />
      </div>
    </div>
  );
};

export default TextField;
