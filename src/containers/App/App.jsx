import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "../../components/Main/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container" style={{ marginTop: "1rem" }}>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
