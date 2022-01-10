import { ADD_COMMENT, REMOVE_COMMENT } from "../types";
import { bake_cookie, read_cookie } from "sfcookies";

export function commentsReducer(state = [], action) {
  let comments = [];
  state = read_cookie("comments");
  switch (action.type) {
    case ADD_COMMENT:
      comments = [
        ...state,
        {
          id: Math.random(),
          text: action.text,
          blog: action.blog,
        },
      ];
      bake_cookie("comments", comments);
      return comments;
    case REMOVE_COMMENT:
      comments = state.filter((comment) => comment.id !== action.id);
      bake_cookie("comments", comments);
      return comments;
    default:
      return state;
  }
}
