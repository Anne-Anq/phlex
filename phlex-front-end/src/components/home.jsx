import React from "react";
import Form from "./form";

class Home extends Form {
  onChange = e => {
    this.props.onChange(e);
  };
  render() {
    return (
      <React.Fragment>
        <h4 className="m-5">Some Fancy Text</h4>
        {this.renderInputField(
          "photoType",
          "Types of photography",
          "Ex: Food pictures, 360deg, outdoor..."
        )}
      </React.Fragment>
    );
  }
}

export default Home;
