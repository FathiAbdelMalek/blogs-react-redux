import { combineReducers, createStore } from "redux";
import { blogsReducer } from "./blogs";
import { commentsReducer } from "./comments";


const reducer = combineReducers({
    blogs: blogsReducer,
    comments: commentsReducer
})

export default createStore(reducer);
