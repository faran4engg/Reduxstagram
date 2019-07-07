import comments from "../../data/comments";

const initialState = {
  comments
};

const commentsReducer = (state = initialState, action) => {
  console.log("commentsReducer", state);
  return state;
};

export default commentsReducer;
