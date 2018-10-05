import React, { Component } from 'react';
// components


class SearchNumberOfPeople extends Component {

  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.onNumChange(event.target.value, "people");
  }

  render() {
    return (
      <input placeholder="Enter number of people" value={this.state.value} onChange={this.handleChange} className="form-control" type="number" />
    );
  }
}

export default SearchNumberOfPeople;
