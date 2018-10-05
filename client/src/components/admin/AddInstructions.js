import React, { Component } from 'react';
import update from 'immutability-helper';
// components
import TextArea from "./addInstructions/TextArea";

class AddInstructions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [""]
    };
  }

  componentWillReceiveProps = (props) => {
    this.setState({steps: props.clear ? [""] : null});
  }

  handleChangeStep = (text, stepKey) => {
    const changedSteps = update(this.state.steps, {
      [stepKey]: {$set: text}
    });
    this.setState({steps: changedSteps});
  }

  handleAddStep = (e) => {
    e.preventDefault();
    // do not mutate state directly. could lead to serious bugs
    this.setState(prevState => ({
      steps: [...prevState.steps, [""]]
    }))
  }

  render() {
    return (
      <div id="instructions" className="form-group col-md-12">
        <label>Instructions</label>
        {this.state.steps.map((step, i) => {
          return (
            <TextArea key={i} step={i} val={step} onChangeStep={this.handleChangeStep} />
          )
        })}
        <button onClick={this.handleAddStep} className="smallBtn"><i className="icon-plus"></i>Add step</button>
      </div>
    )
  }
}

export default AddInstructions;
