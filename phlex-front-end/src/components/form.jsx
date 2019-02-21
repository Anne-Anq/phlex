import React, { Component } from "react";

class Form extends Component {
  state = {};
  renderInputField(path, label, placeholder, type = "text") {
    return (
      <div className="form-group text-left p-3">
        <label htmlFor={path}>{label}</label>
        <input
          className="form-control"
          id={path}
          placeholder={placeholder}
          type={type}
          onChange={e => this.handleChange(e)}
        />
      </div>
    );
  }
  renderRange(path, label, min = 0, max = 100, step = 1, val = 50) {
    const curVal = 50; // to be changed by a dynamic value, raising state to result page
    return (
      <div className="form-group text-left p-3">
        <label htmlFor={path}>{`${label}:${curVal}`}</label>
        <input
          id={path}
          className="form-control"
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={val}
          onChange={e => this.handleChange(e)}
          list="tickmarks"
        />
        <datalist id="tickmarks">
          <option value="0" label="0%" />
          <option value="10" />
          <option value="20" />
          <option value="30" />
          <option value="40" />
          <option value="50" label="50%" />
          <option value="60" />
          <option value="70" />
          <option value="80" />
          <option value="90" />
          <option value="100" label="100%" />
        </datalist>
      </div>
    );
  }
  renderRadio(path, label, options) {
    return (
      <div className="form-group text-left p-3">
        <label htmlFor={path}>{label}</label>
        <div className="d-flex">
          {options.map((option, i) => (
            <div key={`option${i}`} className="mr-3">
              <input
                type="radio"
                id={option.path}
                name={path}
                value={option.path}
                defaultChecked={i === 0}
                onChange={e => this.handleChange(e)}
              />
              <label htmlFor={option.path}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
  handleChange(e) {
    console.log(e.target.value);
    return e.target.value;
  }
}

export default Form;
