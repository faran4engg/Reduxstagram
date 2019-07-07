import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";

const Card = props => {
  return (
    <Link to={`/view/${props.code}`}>
      <div className="ui card cust-card">
        <div className="image img-height">
          <img src={props.display_src} alt={props.caption} />
        </div>

        <div className="content ">
          <div className="description content-height">{props.caption}</div>
        </div>
        <div className="content">
          <span className="left floated">
            <i className="thumbs up icon icon" />
            {props.likes}
          </span>
          <span className="right floated">
            <i className="comment icon" />
            Add comment
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
