import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import * as actionTypes from "../../redux/action/actions";
import Main from "../../components/Main/Main";

import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="ui container" style={{ marginTop: "1rem" }}>
          <Main {...this.props} />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.postsReducer.posts,
    comments: state.commentsReducer.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch({ type: actionTypes.GET_POSTS }),
    addComment: () => dispatch({ type: actionTypes.ADD_COMMENT }),
    removeComment: () => dispatch({ type: actionTypes.REMOVE_COMMENT }),
    incrementLikes: () => dispatch({ type: actionTypes.INCREMENT_LIKES })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
