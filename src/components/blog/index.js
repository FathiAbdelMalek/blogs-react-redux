import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editBlog } from "../../actions/blogs";
import Comments from "../comments";

const Blogs = (props) => {

    const initialState = {
        'title': '',
        'description': ''
    }
    const [blog, setBlog] = useState(initialState)
    const {id} = useParams()

    useEffect (() => {
        const {blogs} = props
        blogs.map(blog => {
            if (blog.id == id)
                setBlog({
                    'title': blog.title,
                    'description': blog.description,
                })
        })
    }, [])

    return (
        <div>
            <h1>TITLE : {blog.title}</h1>
            <p>DESCRIPTION : {blog.description}</p>
            <Comments blog={id} />
        </div>
    )
}

export default connect(state => {return {blogs: state.blogs}}, {editBlog})(Blogs)
