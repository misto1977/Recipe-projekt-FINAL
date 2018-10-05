import React, { Component } from 'react';
// components
import Title from "../components/admin/Title";
import Serves from "../components/admin/Serves";
import PickCategory from "../components/admin/PickCategory";
import AddIngredients from "../components/admin/AddIngredients";
import AddInstructions from "../components/admin/AddInstructions";
import AddImage from "../components/admin/AddImage";
import Submit from "../components/admin/Submit";

class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = { clear: false };
  }

  calcNutrition = (ingredients, ingMeasures) => {

    let nutrition = {
      energy: 0,
      proteins: 0,
      calories: 0,
      sugar: 0,
      saturatedFattyAcids: 0,
      monounsaturatedFattyAcids: 0,
      polyunsaturatedFattyAcids: 0
    };


    ingredients.map((ing, i) => {
      let ingMeasure = ingMeasures[i];
      let ingAmount = ing.ViktGram * this.measureRate(ingMeasure);

      ing.Naringsvarden.Naringsvarde.map(elem => {
        nutrition.energy += (elem.Namn === "Energi (kcal)") ? elem.Varde.replace(/,/g,".") * ingAmount/100 : 0;
        nutrition.proteins += (elem.Namn === "Protein") ? elem.Varde.replace(/,/g,".") * ingAmount/100 : 0;
        nutrition.calories += (elem.Namn === "Kolhydrater") ? elem.Varde.replace(/,/g,".") * ingAmount/100 : 0;
        nutrition.sugar += (elem.Namn === "Socker totalt") ? elem.Varde.replace(/,/g,".") * ingAmount/100 : 0;
        nutrition.saturatedFattyAcids += (elem.Namn === "Summa mättade fettsyror") ? elem.Varde.replace(/,/g,".") * ingAmount/100 : 0;
        nutrition.monounsaturatedFattyAcids += (elem.Namn === "Summa enkelomättade fettsyror") ? elem.Varde.replace(/,/g,".") * ingAmount/100 : 0;
        nutrition.polyunsaturatedFattyAcids += (elem.Namn === "Summa fleromättade fettsyror") ? elem.Varde.replace(/,/g,".") * ingAmount/100 : 0;
      })
    });
    return nutrition;
  }

  measureRate = (measure) => {
    let rate = 1;
    switch(measure) {
      case "dl":
        rate = 100;
        break;
      case "kg":
        rate = 1000;
        break;
      default:
        rate = 1;
    }
    return rate;
  }

  reduceIngredients = (ingredients, ingMeasures) => {
    let reducedIngs = [];
    let measures = ingMeasures;

    ingredients.map((ing, i) => {
      let newIng = {
        name: ing.Namn,
        units: 1,
        measuringUnit: measures[i],
        amount: ing.ViktGram
      }
      reducedIngs.push(newIng);
    });
    return reducedIngs;
  }

  handleSubmit = (e) => {
    if(this.checkIfFieldsCompleted()) {
      e.preventDefault();
      let name = this.title.state.value;
      let serves = this.serves.state.value;
      let category = this.pickCategory.state.value;
      let ingredients = this.addIngredients.state.pickedIngs;
      let ingMeasures = this.addIngredients.state.measures;
      let instructions = this.addInstructions.state.steps;
      let urlToImg = this.addImage.state.value;

      let nutrition = this.calcNutrition(ingredients, ingMeasures);

      let reducedIngs = this.reduceIngredients(ingredients, ingMeasures);

      const recipe = {
        id: 0,
        name: name,
        serves: serves,
        category: category,
        instructions: instructions,
        ingredients: reducedIngs,
        nutrition: nutrition,
        urlToImg: urlToImg
      }

      this.sendRecipe(JSON.stringify(recipe));
    } else {
      alert("Complete all fields to submit.");
    }
  }

  checkIfFieldsCompleted = () => {
    if( this.title.state.value!=="" && this.serves.state.value!=="" && this.addIngredients.state.pickedIngs!==[] && this.addInstructions.state.steps!==[""] && this.addImage.state.value!=="" ){
      return true;
    } else {
      return false;
    }
  }

  sendRecipe = (data) => {
    fetch("/addrecipe",
    {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: data
    })
    .then(function(res){ alert("Recipe Successfully added!") });

    this.setState({ clear: true });
  }

  render() {
    return (
      <div className="col-md-12">
        <div style={{marginTop:100}} className="add-review col-md-6 m-0auto">
					<h5>Add a recipe</h5>
					<form>
						<div className="row">

              <Title clear={this.state.clear} ref={(title) => {this.title = title;}} />

							<Serves clear={this.state.clear} ref={(serves) => {this.serves = serves;}} />

              <PickCategory clear={this.state.clear} ref={(pickCategory) => {this.pickCategory = pickCategory;}} />

              <AddIngredients clear={this.state.clear} ref={(addIngredients) => {this.addIngredients = addIngredients;}} />

              <AddInstructions clear={this.state.clear} ref={(addInstructions) => {this.addInstructions = addInstructions;}}  />

              <AddImage clear={this.state.clear} ref={(addImage) => {this.addImage = addImage;}} />

							<Submit onSubmit={this.handleSubmit} />

						</div>
					</form>
  			</div>
      </div>
    );
  }
}

export default Admin;
