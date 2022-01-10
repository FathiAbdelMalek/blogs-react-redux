import React from "react";

export default class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'title': '',
            'description': ''
        }
    }

    render() {
        return (
            <form>
                <div>
                    <input
                        id="title"
                        name="title"
                        type={"text"}
                        placeholder="Enter the title of the blog"
                        value={this.state.title}
                        onChange={e => this.setState({title: e.target.value})}
                    />
                </div>
                <div>
                    <textarea
                        id="description"
                        placeholder="Enter the description of the blog"
                        rows="8"
                        value={this.state.description}
                        onChange={e => this.setState({description: e.target.value})}
                    />
                </div>
                <div>
                    <button type="button" onClick={() => this.props.addBlog(this.state.title, this.state.description)}>Add Blog</button>
                </div>
                <div>
                    <button type="button" onClick={() => this.props.clearBlogs()}>Clear Blogs</button>
                </div>
            </form>
        )
    }
}
