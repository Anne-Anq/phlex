import React from "react";
import Form from "../Form";

class SearchForm extends Form {
  onChange = e => {
    this.props.onChange(e);
  };
  render() {
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
          "Max price for 10 photo package ",
          0,
          1000,
          10,
          basePrice
        )}
        {this.renderRange(
          "addPrice",
          "Max price for 5 extra photoss ",
          0,
          500,
          10,
          addPrice
        )}
      </div>


    );
  }
}

export default SearchForm;
