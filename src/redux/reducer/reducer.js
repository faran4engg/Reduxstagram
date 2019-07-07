import { combineReducers } from "redux";

import postsReducer from "./posts-reducer";
import commentsReducer from "./comments-reducer";

const rootReducer = combineReducers({
  postsReducer,
  commentsReducer
});

export default rootReducer;
