import {
    ADD_BLOG,
    EDIT_BLOG,
    REMOVE_BLOG,
    CLEAR_BLOGS
} from "../types";


export function addBlog(title, description) {
    return {
        type: ADD_BLOG,
        title,
        description
    }
}

export function editBlog(id, title, description) {
    return {
        type: EDIT_BLOG,
        id,
        title,
        description
    }
}

export function removeBlog(id) {
    return {
        type: REMOVE_BLOG,
        id
    }
}

export function clearBlogs() {
    return {
        type: CLEAR_BLOGS
    }
}
