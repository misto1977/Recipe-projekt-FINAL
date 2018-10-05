import React, { Component } from 'react';
// components

class Ingredient extends Component {

  checkIfMassUnit = (measuringUnit) => {
    const massUnits = [ "mg", "g", "kg" ];
    if( massUnits.includes(measuringUnit) ){
      return true;
    }
    return false;
  }

  ingName = this.props.name;
  measuringUnit = this.props.measuringUnit;
  serves = this.props.serves;

  render() {

    let people = this.props.people
    let amount = Math.round( ( this.props.amount / this.serves ) * people )

    let text = this.ingName + " (" + amount + " " + this.measuringUnit + ")"

    return (
      <span>
        {text}
        <br />
      </span>
    );
  }
}

export default Ingredient;
