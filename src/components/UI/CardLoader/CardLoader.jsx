import React from "react";
import "../Card.css";
const PlaceHolderCard = () => {
  return (
    <React.Fragment>
      <div className="ui three doubling stackable cards">
        <div className="ui card cust-card">
          <div className="image">
            <div className="ui placeholder">
              <div className="square image" />
            </div>
          </div>
          <div className="content">
            <div className="ui placeholder">
              <div className="header">
                <div className="very short line" />
                <div className="medium line" />
              </div>
              <div className="paragraph">
                <div className="short line" />
              </div>
            </div>
          </div>
          <div className="extra content">
            <span className="left floated">
              <i className="thumbs up icon icon" />
            </span>
            <span className="right floated">
              <i className="comment icon" />
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlaceHolderCard;
