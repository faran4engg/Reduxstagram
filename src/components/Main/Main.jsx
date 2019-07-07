import React from "react";
import { Link, Route } from "react-router-dom";
import "./Main.css";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
const Main = props => {
  return (
    <React.Fragment>
      <h1 className="heading">
        <Link to="/">Reduxstagram</Link>
      </h1>

      <Route exact path="/" component={PhotoGrid} />
      <Route path="/view/:id" component={SinglePhoto} />
    </React.Fragment>
  );
};

export default Main;
