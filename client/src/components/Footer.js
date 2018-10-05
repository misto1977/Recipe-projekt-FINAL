import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="container margin_60_35">
          <div className="row">
              <div className="container margin_60_35">
                <div className="row">
                  <div className="col-md-4 m-0auto">
                    <Link to="/admin" className="boxed_list">
                      <i className="pe-7s-pen"></i>
                      <h4 className="white-text">WRITE A RECIPE</h4>
                      <p className="white-text">Share your tasty recipes with us</p>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
