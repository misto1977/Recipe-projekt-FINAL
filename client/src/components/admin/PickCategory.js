import React, { Component } from 'react';
// components

class PickCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "appetizers"
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {

    return (
      <div className="form-group col-md-12">
        <label>Pick Category</label><br/>
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="appetizers">Appetizers</option>
            <option value="breakfast & brunch">Breakfast & Brunch</option>
            <option value="desserts">Desserts</option>
            <option value="dinners">Dinners</option>
            <option value="salads">Salads</option>
            <option value="drinks">Drinks</option>
        </select>
      </div>
    )
  }
}

export default PickCategory;
