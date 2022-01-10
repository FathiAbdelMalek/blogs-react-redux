import {
    ADD_BLOG,
    EDIT_BLOG,
    REMOVE_BLOG,
    CLEAR_BLOGS
} from "../types";
import {
    bake_cookie,
    read_cookie
} from "sfcookies";


export function blogsReducer(state=[], action) {
    let blogs = []
    state = read_cookie('blogs')
    switch (action.type) {
        case ADD_BLOG:
            blogs = [
                ...state,
                {
                    id: Math.random(),
                    title: action.title,
                    description: action.description
                }
            ]
            bake_cookie('blogs', blogs)
            return blogs
        case EDIT_BLOG:
            blogs = state.filter(blog => {
                if (blog.id === action.id) {
                    blog.title = action.title
                    blog.description = action.description
                }
            })
            bake_cookie('blogs', blogs)
            return blogs
        case REMOVE_BLOG:
            blogs = state.filter(blog => blog.id !== action.id)
            bake_cookie('blogs', blogs)
            return blogs
        case CLEAR_BLOGS:
            blogs = []
            bake_cookie('blogs', blogs)
            return blogs
        default:
            return state
    }
}
