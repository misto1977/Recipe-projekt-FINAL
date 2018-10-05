import React, { Component } from 'react';
// components
import Ingredients from "../components/Ingredients";
import Nutrition from "../components/Nutrition";

class Recipe extends Component {

  constructor(props, match){
    super(props);

    this.state = { recipe: [], people: this.props.people };
  }

  componentDidMount() {
    // fetch the recipe by id
    fetch(`/recipe/${this.props.id}`)
    .then( res => res.json() )
    .then( recipe => this.setState({ recipe: recipe }) );
  }

  isFetchedRecipe = () => {
    if(this.state.recipe === undefined || this.state.recipe.length === 0) {
      return false;
    }
    return true;
  }

  recipeBody = (recipe, people) => {
    return (
      <React.Fragment>
        <div className="col-lg-9">
          <div className="bloglist singlepost">
            <p><img src={recipe.urlToImg} alt={recipe.name} /></p>
            <h1>{recipe.name}</h1>
            <div className="postmeta">
              <ul>
                <li><a href="asd"> {recipe.category}</a></li>
              </ul>
            </div>
            <div className="post-content">
              <h6>Instructions:</h6>
              <div>
                <ul>
                  {recipe.instructions.map((inst, i) => {
                    return (
                      <li style={{marginTop:20}} key={i}>{i+1}) {inst}</li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-lg-6">
                <h6>Ingredients (for {this.props.people} persons):</h6>
                <ul className="bullets">
                  <Ingredients ingredients={recipe.ingredients} serves={recipe.serves} people={this.props.people} />
                </ul>
              </div>
              <div className="col-lg-6">
                <h6 style={{paddingTop:30}}>Nutritional value (for {this.props.people} persons):</h6>
                <ul className="bullets">
                  <Nutrition
                    people={this.state.people}
                    serves={recipe.serves}
                    energy={recipe.nutrition.energy}
                    proteins={recipe.nutrition.proteins}
                    carbs={recipe.nutrition.calories}
                    sugar={recipe.nutrition.sugar}
                    saturatedFattyAcids={recipe.nutrition.saturatedFattyAcids}
                    monounsaturatedFattyAcids={recipe.nutrition.monounsaturatedFattyAcids}
                    polyunsaturatedFattyAcids={recipe.nutrition.polyunsaturatedFattyAcids}
                   />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
  )}

  render() {

    return (
      <React.Fragment>
        {this.isFetchedRecipe() ?
          this.recipeBody(this.state.recipe, this.state.people)
        : <p></p>
        }
      </React.Fragment>
    );
  }
}

export default Recipe;
