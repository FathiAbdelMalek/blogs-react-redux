import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import List from "./List";
import { addComment, removeComment } from "../../actions/comments";

class Comments extends React.Component {
  render() {
    return (
      <div>
        <Form addComment={this.props.addComment} blog={this.props.blog} />
        <List
          comments={this.props.comments}
          blog={this.props.blog}
          removeComment={this.props.removeComment}
        />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return { comments: state.comments };
  },
  { addComment, removeComment }
)(Comments);
