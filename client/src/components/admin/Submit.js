import React, { Component } from 'react';
// components

class Submit extends Component {

  render() {

    return (
      <div className="form-group col-md-12 add_top_20">
        <button id="submitRecipe" name="submit"
          onClick={this.props.onSubmit}
          className="btn_1">
          Submit recipe
        </button>
      </div>
    )
  }
}

export default Submit;
