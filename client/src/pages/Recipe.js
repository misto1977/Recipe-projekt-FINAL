import React from 'react';
import { Route } from 'react-router-dom';
// components
import RecipeContent from "../components/RecipeContent";

const Recipe = ({ match }) => (
  <main style={{paddingTop: 70}}>

    <div className="container margin_60_35">
      <div className="wrapper-grid">
        <div className="row">

          <Route path={`${match.path}/:id/:people`} component={({match}) => (<RecipeContent id={match.params.id} people={match.params.people} />)} />

        </div>
      </div>
    </div>

  </main>
);

export default Recipe;
