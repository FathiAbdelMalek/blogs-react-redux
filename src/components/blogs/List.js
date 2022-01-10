import React from "react";
import { NavLink } from "react-router-dom";


export default class List extends React.Component {

    render() {
        const {blogs} = this.props
        return (
            <ul>
                {
                    blogs.map(blog => {
                        return (
                            <li key={blog.id}>
                                <h2>{blog.title}</h2>
                                <p>{blog.description}</p>
                                <NavLink to={'/blogs/' + blog.id} >Edit this post</NavLink>
                                <button type="button" onClick={() => this.props.removeBlog(blog.id)}>X</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
