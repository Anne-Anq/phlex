import React, { Component } from "react";
import PgCard from "./PgCard";


class PgCards extends Component {
  state = {};
  render() {
    const { photographers } = this.props;
    return <div className="pgCards">
      {photographers && photographers[0] && photographers.map((pg, i) => (
        <PgCard key={pg.id} photographer={pg} isFirst={i === 0} />
      ))}
    </div >;
  }
}

export default PgCards;
