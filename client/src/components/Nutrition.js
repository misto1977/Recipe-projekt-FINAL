import React, { Component } from 'react';
// components

class Nutrition extends Component {

  energy = this.props.energy;
  proteins = this.props.proteins;
  carbs = this.props.carbs
  fat = this.props.fat;
  sugar = this.props.sugar;
  saturatedFattyAcids = this.props.saturatedFattyAcids;
  monounsaturatedFattyAcids = this.props.monounsaturatedFattyAcids;
  polyunsaturatedFattyAcids = this.props.polyunsaturatedFattyAcids;

  render() {

    let people = this.props.people;

    return (
      <React.Fragment>
        <li>Energy: {((this.energy / this.props.serves) * people).toFixed(2)} kcal</li>
        <li>Proteins: {((this.proteins / this.props.serves) * people).toFixed(2)}g</li>
        <li>Carbs: {((this.carbs / this.props.serves) * people).toFixed(2)}</li>
        <li>Sugar: {((this.sugar / this.props.serves) * people).toFixed(2)}</li>
        <li>Saturated Fatty Acids: {((this.saturatedFattyAcids / this.props.serves) * people).toFixed(2)}g</li>
        <li>Monounsaturated Fatty Acids: {((this.monounsaturatedFattyAcids / this.props.serves) * people).toFixed(2)}g</li>
        <li>Polyunsaturated Fatty Acids: {((this.polyunsaturatedFattyAcids / this.props.serves) * people).toFixed(2)}g</li>
      </React.Fragment>
    );
  }
}

export default Nutrition;
