import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Container from "@material-ui/core/Container";

import Main from "../../components/Main/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container maxWidth="lg">
          <Main />
        </Container>
      </BrowserRouter>
    );
  }
}
export default App;
