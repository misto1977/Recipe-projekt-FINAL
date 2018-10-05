import React, { Component } from 'react';
// components
import SugestedIngredient from "./SugestedIngredient";

class Autosuggest extends Component {
  constructor(props) {
    super(props);

    this.minChars = this.props.minChars;
  }

  onChange = (e) => {
    let str = e.target.value;
    if(str.length >= this.minChars) {
      this.props.onFetchRequest(str);
    }
  }

  addIngredient = (ing, name) => {
    this.props.onAddIngredient(ing, name);
  }

  render() {

    let results = this.props.fetchedIngs;

    return (
      <React.Fragment>
        <label>Add Ingredients</label>
        <input onChange={this.onChange} type="text" name="add_ingredients" placeholder="Type in ingredient names" className="form-control"/>

        {results==='undefined' || results.length===0 ? <div></div> :
        <div id="autosuggest">
          <ul>
            {results.map((ing, i) => {
              return(
                <SugestedIngredient key={i} ing={ing} onAddIngredient={this.addIngredient} />
              )
            })}
          </ul>
        </div>}
      </React.Fragment>
    )
  }
}

export default Autosuggest;
