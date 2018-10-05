import React, { Component } from 'react';
// components


class Categories extends Component {

  changeCategory = (e) => {
    let categoryName = e.target.getAttribute("categoryname");
    this.props.onCategoryChange(categoryName);
  }

  render() {
    return (
      <div className="filters_listing sticky_horizontal">
        <div className="container">
          <ul className="clearfix">
            <li>
              <div className="switch-field">
                <label categoryname={"*"} onClick={ (e) => this.changeCategory(e) }>All</label>
                <label categoryname={"appetizers"} onClick={ (e) => this.changeCategory(e) }>Appetizers</label>
                <label categoryname={"breakfast & brunch"} onClick={ (e) => this.changeCategory(e) }>Breakfast &amp; Brunch</label>
                <label categoryname={"desserts"} onClick={ (e) => this.changeCategory(e) }>Desserts</label>
                <label categoryname={"dinners"} onClick={ (e) => this.changeCategory(e) }>Dinners</label>
                <label categoryname={"salads"} onClick={ (e) => this.changeCategory(e) }>Salads</label>
                <label categoryname={"drinks"} onClick={ (e) => this.changeCategory(e) }>Drinks</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Categories;
