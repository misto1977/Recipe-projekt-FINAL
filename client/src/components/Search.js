import React, { Component } from 'react';
// components
import SearchKeyword from "./SearchKeyword";
import SearchNumberOfPeople from "./SearchNumberOfPeople";

class Search extends Component {

  handleChangedValues = (value, type) => {
    this.props.onSearchChange(value, type);
  }

  render() {
    return (
      <section className="hero_in tours">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp"><span></span>SEARCH RECIPES...</h1>
            <div className="col-lg-12">

                <div className="row no-gutters custom-search-input-2 inner">
                  <div className="col-lg-8">
                    <div className="form-group">

                      <SearchKeyword onKeywordChange={this.handleChangedValues} />

                      <i className="icon_search"></i>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">

                      <SearchNumberOfPeople onNumChange={this.handleChangedValues} />

                      <i className="icon_group"></i>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
