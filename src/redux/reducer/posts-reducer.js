import posts from "../../data/posts";

const initialState = {
  posts
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return state;
    default:
      return state;
  }
};

export default postsReducer;
