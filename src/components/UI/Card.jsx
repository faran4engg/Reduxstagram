import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="ui card cust-card">
      <div className="image img-height">
        <img src={props.display_src} alt={props.caption} />
      </div>

      <div className="content ">
        <div className="description content-height">{props.caption}</div>
      </div>
      <div className="content">
        <span className="right floated">
          <i className="heart outline like icon" />
          17 likes
        </span>
        <i className="comment icon" />3 comments
      </div>
    </div>
  );
};

export default Card;
