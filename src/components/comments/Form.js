import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <form>
        <input
          id="text"
          name="text"
          type={"text"}
          placeholder="Enter a comment"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button
          type="button"
          onClick={() =>
            this.props.addComment(this.state.text, this.props.blog)
          }
        >
          add comment
        </button>
      </form>
    );
  }
}
