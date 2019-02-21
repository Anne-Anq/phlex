import React from "react";
import Form from "./form";
import "../stylesheets/searchForm.css";

class SearchForm extends Form {
  state = {};

  render() {
    const options = [
      { path: "yes", label: "Yes" },
      { path: "no", label: "No / It doesn't matter" }
    ];
    return (
      <div className="searchForm">
        <h4 className="m-5">Find a photographer</h4>
        {this.renderInputField(
          "photoType",
          "Types of photography",
          "Ex: Food pictures, 360deg, outdoor..."
        )}
        {this.renderInputField("dateFrom", "Earliest availability", "", "date")}
        {this.renderRange(
          "basePrice",
          "$ / 10 pictures package ",
          0,
          500,
          10,
          300
        )}
        {this.renderRange(
          "addPrice",
          "$ / each additional 5 pictures ",
          0,
          500,
          10,
          30
        )}
        {this.renderRadio("tradeOk", "Accepts service trade", options)}
      </div>
    );
  }
}

export default SearchForm;
