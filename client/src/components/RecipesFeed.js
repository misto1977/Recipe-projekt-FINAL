import React, { Component } from 'react';
// components
import RecipeCard from "./RecipeCard";

class Feed extends Component {

  constructor(props){
    super(props);

    this.state = { recipes: [], filteredRecipes: [] };
  }

  componentDidMount() {
    // fetch all recipes, then filter
    fetch('/recipes')
    .then( res => res.json() )
    .then( recipes => this.setState({ recipes: recipes }) );
  }

  filterRecipes = (category, keyword) => {
    let allRecipes = this.state.recipes;

    if(category==="*" && keyword==="") {
      return allRecipes;
    } else if(category==="*" && keyword!=="") {
      const filtered = allRecipes.filter((rcp) => rcp.name.toLowerCase().includes(keyword.toLowerCase()));
      return filtered;
    } else if(category!=="*" && keyword==="") {
      const filtered = allRecipes.filter((rcp) => rcp.category === category.toLowerCase() );
      return filtered;
    } else {
      const filtered = allRecipes.filter((rcp) => rcp.category === category.toLowerCase() && rcp.name.toLowerCase().includes(keyword.toLowerCase()));
      return filtered;
    }
  }

  render() {

    let result = this.filterRecipes(this.props.category, this.props.keyword);

    return (
      <div className="container margin_60_35">
        <div className="wrapper-grid">
          <div className="row">

            {result.length === 0 ? <h5>No recipes found.</h5>
            : result.map( (recipe) =>
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                data={recipe}
                people={this.props.people}
              />
            )}

          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
