import React, { Component } from "react";

class Form extends Component {
  state = {};
  renderInputField(path, label, placeholder, value) {
    return (
      <div className="form-group text-left p-3">
        <label htmlFor={path}>{label}</label>
        <input
          className="form-control"
          id={path}
          placeholder={placeholder}
          type="text"
          onChange={this.onChange}
          value={value}
        />
      </div>
    );
  }
  renderDateField(path, label) {
    const today = new Date(Date.now());
    const month = Number(today.getMonth()) + 1;
    const defaultDate = `${today.getFullYear()}-${month
      .toString()
      .padStart(2, "0")}-${today.getDate()}`;

    return (
      <div className="form-group text-left p-3">
        <label htmlFor={path}>{label}</label>
        <input
          className="form-control"
          id={path}
          type="date"
          onChange={this.onChange}
          defaultValue={defaultDate}
        />
      </div>
    );
  }
  renderRange(path, label, min = 0, max = 100, step = 1, val) {
    const ticks = [];
    for (let i = min; i <= max; i += step * 5) {
      ticks.push(i);
    }
    return (
      <div className="form-group text-left p-3">
        <label htmlFor={path}>{`${label}: ${val}`}</label>
        <input
          id={path}
          className="form-control"
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={val}
          onChange={this.onChange}
          list="tickmarks"
        />
        <datalist id="tickmarks">
          {ticks.map(tick => (
            <option key={tick} value={tick} />
          ))}
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
                onChange={this.onChange}
              />
              <label htmlFor={option.path}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Form;
