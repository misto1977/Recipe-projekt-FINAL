import React, { Component } from 'react';
// components


class Title extends Component {

  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  componentWillReceiveProps = (props) => {
    this.setState({value: props.clear ? "" : null});
  }

  render() {
    return (
      <div className="form-group col-md-12">
        <label>Title</label>
        <input type="text" name="title" value={this.state.value} onChange={this.handleChange} placeholder="Recipe title" className="form-control"/>
      </div>
    );
  }
}

export default Title;
