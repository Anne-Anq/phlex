import React, { Component } from "react";
import PgCard from "./pgCard";


class PgCards extends Component {
  state = {};
  render() {
    const { photographers } = this.props;
    return <div className="pgCards">
      {photographers[0] && photographers.map((pg) => (
        <PgCard key={pg.id} photographer={pg} />
      ))}
    </div >;
  }
}

export default PgCards;
