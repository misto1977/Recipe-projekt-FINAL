import React, { Component } from 'react';
// components

class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }

  componentWillReceiveProps = (props) => {
    this.setState({value: props.clear ? "" : null});
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {

    return (
      <div className="form-group col-md-12">
        <label>Image URL</label>
        <input type="text" name="title" value={this.state.value} onChange={this.handleChange} placeholder="Enter image URL" className="form-control"/>
      </div>
    )
  }
}

export default AddImage;
