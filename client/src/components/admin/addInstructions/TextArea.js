import React, { Component } from 'react';
// components

class TextArea extends Component {

  changeText = (e) => {
    let stepKey = e.target.getAttribute("stepkey");
    this.props.onChangeStep(e.target.value, stepKey);
  }

  render() {
    let stepText = this.props.val;
    return (
      <textarea
        stepkey={this.props.step}
        onChange={this.changeText}
        value={stepText}
        className="form-control"
        placeholder={"Step " + (this.props.step + 1) + ":"}
        style={{height:130}}></textarea>
    )
  }
}

export default TextArea;
