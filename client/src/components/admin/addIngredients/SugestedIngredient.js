import React, { Component } from 'react';
// components

class SugestedIngredient extends Component {

  addIngredient = (e) => {
    const name = e.target.getAttribute("name");
    this.props.onAddIngredient(this.props.ing, name);
  }

  render() {
    return (
      <li name={this.props.ing.Namn} onClick={this.addIngredient} >{this.props.ing.Namn}</li>
    )
  }
}

export default SugestedIngredient;
