import React, { Component } from 'react';

// components
import Search from "../components/Search";
import Categories from "../components/Categories";
import RecipesFeed from "../components/RecipesFeed";

class Home extends Component {

  constructor(props){
    super(props);

    this.state = { keyword: "", people: 4, category: "*", toLoad: "6" };
  }

  handleChangeCategory = (categoryName) => {
    this.setState({category: categoryName});
  }

  handleChangeSearch = (value, type) => {
    let searchValue = value;
    if(searchValue) {
      this.setState({ [type]: value });
    }
  }

  render() {

    return (
      <main>

        <Search
          onSearchChange={this.handleChangeSearch}
        />
        <Categories
          onCategoryChange={this.handleChangeCategory}
        />
        <RecipesFeed
          keyword={this.state.keyword}
          category={this.state.category}
          people={this.state.people}
        />

      </main>
    );
  }
}

export default Home;
