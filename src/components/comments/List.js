import React from "react";

export default class List extends React.Component {
  render() {
    this.comments = this.props.comments;
    return (
      <ul>
        {this.comments.map((comment) => {
          if (comment.blog === this.props.blog)
            return (
              <li key={comment.id}>
                <span>{comment.text}</span>
                <button
                  type="button"
                  onClick={() => this.props.removeComment(comment.id)}
                >
                  X
                </button>
              </li>
            );
        })}
      </ul>
    );
  }
}
