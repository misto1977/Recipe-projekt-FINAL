import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// components
import Ingredients from "./Ingredients";

class RecipeCard extends Component {

  render() {

    const ingredients = this.props.data.ingredients

    return (
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="box_grid">
          <figure>
            <Link to={`/recipe/${this.props.id}/${this.props.people}`}><img src={this.props.data.urlToImg} className="img-fluid" alt={this.props.data.name} width="800" height="533" /><div className="read_more"><span>Read more</span></div></Link>
            <small>{this.props.data.category}</small>
          </figure>
          <div className="wrapper recipe-card">
            <h3><Link to={`/recipe/${this.props.id}/${this.props.people}`}>{this.props.data.name}</Link></h3>
            <span className="price">
              <strong>Ingredients:</strong><br/>

              <Ingredients ingredients={ingredients} serves={this.props.data.serves} people={this.props.people} />

            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
