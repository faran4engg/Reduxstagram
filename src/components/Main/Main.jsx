import React from "react";
import { Link, Route } from "react-router-dom";
import "./Main.css";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
const Main = props => {
  console.log(props);
  return (
    <React.Fragment>
      <h1 className="heading">
        <Link to="/">Redux-stagram</Link>
      </h1>

      <Route exact path="/view/:id" render={() => <SinglePhoto />} />
      <Route exact path="/" render={() => <PhotoGrid {...props} />} />
    </React.Fragment>
  );
};

export default Main;
