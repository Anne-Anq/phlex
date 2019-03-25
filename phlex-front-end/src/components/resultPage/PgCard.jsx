import React, { Component } from "react";

import PgInfo from "./PgInfo";
import PgAvatar from './PgAvatar';
import PgReviews from "./PgReviews";
import Calendar from "../common/Calendar";
import Card from '@material-ui/core/Card';
import MoreButton from "../common/buttons/MoreButton";
import "../../stylesheets/PgCard.css";

class PgCard extends Component {
  state = {
    isCollapsed: true
  };
  componentDidMount() {
    const { isFirst } = this.props;
    this.setState({ isCollapsed: !isFirst });

  }
  handleClick = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  }
  render() {
    const { photographer } = this.props;
    const { isCollapsed } = this.state;
    return <div className="pgCard">
      <div className="preview" >
        <div className="preview-data" >
          <PgAvatar photographer={photographer} />
          <PgInfo photographer={photographer} />
          <Calendar photographer={photographer} />
        </div>
      </div>
      <div className={`collapsed-data ${isCollapsed ? "is-collapsed" : ""}`}>
        <div className="insta">
          <div className="pretend-pix">
            {photographer.portfolio.map(({ id, picURL, alt }) => (
              <Card key={`pic-${id}`} className="pretend-pic"><img src={picURL} alt={alt}></img></Card>
            ))}
          </div>
          <div className="more-div">
            <MoreButton label="more..." variant="outlined" />
          </div>
        </div>
        <PgReviews photographer={photographer} />
      </div>
      <div className="more-div card-collapse-btn">
        <MoreButton variant="contained" onClick={this.handleClick} label={isCollapsed ? "more..." : "less..."} />
      </div>



    </div >;
  }
}

export default PgCard;
