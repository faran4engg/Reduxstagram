import posts from "../../data/posts";

const initialState = {
  posts
};
const postsReducer = (state = initialState, action) => {
  console.log("postsReducer", state);
  return state;
};

export default postsReducer;
