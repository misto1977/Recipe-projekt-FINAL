import React, { Component } from 'react';
import update from 'immutability-helper';
// components
import Autosuggest from "./addIngredients/Autosuggest";
import PickedIngs from "./addIngredients/PickedIngs";

class AddIngredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedIngs: [],
      pickedIngs: [],
      measures: {}
    }
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      fetchedIngs: props.clear ? [] : null,
      pickedIngs: props.clear ? [] : null,
      measures: props.clear ? {} : null,
    });
  }

  handleFetchRequest = (str) => {
    // fetch ingredients
    fetch(`ingredients/${str}`)
    .then( res => res.json() )
    .then( filteredIngs => this.setState({fetchedIngs: filteredIngs}) );
  }

  handleAddIngredient = (ing, name) => {
    // check if ing already picked - bool
    let inArray = this.state.pickedIngs.some(ing => {
      return ing.Namn === name;
    });
    // do not mutate state directly. could lead to serious bugs
    if(!inArray){
      let unit = this.checkIfFluid(ing);
      this.setState(prevState => ({
        pickedIngs: [...prevState.pickedIngs, ing],
        measures: [...prevState.measures, unit],
        fetchedIngs: []
      }))
    } else {
      this.setState({
        fetchedIngs: []
      })
    }
  }

  handlePickedIngAmount = (amount, ingKey) => {
    const changedPickedIngs = update(this.state.pickedIngs, {
      [ingKey]: {ViktGram: {$set: amount}}
    });
    this.setState({pickedIngs: changedPickedIngs});
  }

  handlePickedIngUnit = (unit, ingKey) => {
    const changedMeasures = update(this.state.measures, {
      [ingKey]: {$set: unit}
    });
    this.setState({measures: changedMeasures});
  }

  handleRemoveIng = (ingKey) => {
    this.setState(prevState => ({
      pickedIngs: update(prevState.pickedIngs, {$splice: [[ingKey, 1]]}),
      measures: update(prevState.measures, {$splice: [[ingKey, 1]]})
    }))
  }

  checkIfFluid = (ing) => {
    let fluids = [ "vatten", "kranvatten", "mineralvatten", "bryggt", "juice", "sås", "dryck", "drick", "must", "olja", "olivolja", "rödvin", " vin", "yoghurt", "vinäger", "vinägrett", "A-fil", "rom", "öl", "cider" ];
    let unit = "";
    if ( fluids.some(fluid => ing.Namn.indexOf(fluid) >= 0) ) {
      unit = "ml";
    } else {
      unit = "g";
    };
    return unit;
  }

  render() {
    return (
      <div className="form-group col-md-12">

        <Autosuggest
          minChars={2}
          onFetchRequest={this.handleFetchRequest}
          fetchedIngs={this.state.fetchedIngs}
          onAddIngredient={this.handleAddIngredient}
        />

        <PickedIngs
          picked={this.state.pickedIngs}
          onChangePickedIngAmount={this.handlePickedIngAmount}
          onChangePickedIngUnit={this.handlePickedIngUnit}
          onRemoveIng={this.handleRemoveIng}
        />

      </div>
    )
  }
}

export default AddIngredients;
