import React, { Component } from 'react';
// components


class Serves extends Component {

  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  handleChange = (event) => {
    let val = event.target.value;
    this.setState({ value: val });
  }

  componentWillReceiveProps = (props) => {
    this.setState({value: props.clear ? "" : null});
  }

  render() {
    return (
      <div className="form-group col-md-12">
        <label>Serves</label>
        <input type="number" min="1" name="serves" value={this.state.value} onChange={this.handleChange} placeholder="For how many people is this recipe ideal?" className="form-control"/>
      </div>
    );
  }
}

export default Serves;
