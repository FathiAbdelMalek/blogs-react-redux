import { ADD_COMMENT, REMOVE_COMMENT } from "../types";

export function addComment(text, blog) {
  return {
    type: ADD_COMMENT,
    text,
    blog,
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  };
}
