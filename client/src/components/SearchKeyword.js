import React, { Component } from 'react';
// components


class SearchKeyword extends Component {

  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.onKeywordChange(event.target.value, "keyword");
  }

  render() {
    return (
      <input placeholder="Enter keywords" value={this.state.value} onChange={this.handleChange} className="form-control" type="text" />
    );
  }
}

export default SearchKeyword;
