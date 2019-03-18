import React from "react";
import Form from "../Form";

class SearchForm extends Form {
  onChange = e => {
    this.props.onChange(e);
  };
  render() {
    const options = [
      { path: "yes", label: "Yes" },
      { path: "no", label: "No / It doesn't matter" }
    ];
    const { photoType, addPrice, basePrice } = { ...this.props.data.search };

    return (

      <div className="searchForm pt-4">
        {this.renderInputField(
          "photoType",
          "Types of photography",
          "Ex: Food pictures, 360deg, outdoor...",
          photoType
        )}
        {this.renderDateField("dateFrom", "Earliest availability")}
        {this.renderRange(
          "basePrice",
          "$ / 10 pictures package ",
          0,
          1000,
          10,
          basePrice
        )}
        {this.renderRange(
          "addPrice",
          "$ / each additional 5 pictures ",
          0,
          500,
          10,
          addPrice
        )}
        {this.renderRadio("tradeOk", "Accepts service trade", options)}
      </div>


    );
  }
}

export default SearchForm;
