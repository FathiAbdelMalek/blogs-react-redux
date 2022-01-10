import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import List from "./List";
import { addBlog, removeBlog, clearBlogs } from "../../actions/blogs";


class Blogs extends React.Component {

    render() {
        return (
            <div>
                <Form addBlog={this.props.addBlog} clearBlogs={this.props.clearBlogs} />
                <List blogs={this.props.blogs} removeBlog={this.props.removeBlog} />
            </div>
        )
    }
}

export default connect(state => {return {blogs: state.blogs}}, {addBlog, removeBlog, clearBlogs})(Blogs)
