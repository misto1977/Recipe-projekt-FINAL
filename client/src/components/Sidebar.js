import React, { Component } from 'react';
// components

class Sidebar extends Component {

  render() {
    return (
      <aside className="col-lg-3">
        <div className="widget">
          <div className="widget-title">
            <h4>Recent Posts</h4>
          </div>
          <ul className="comments-list">
            <li>
              <div className="alignleft">
                <a href="asd0"><img src={"/images/recipes/" + this.props.similar.urlToImg} alt={this.props.similar.name} /></a>
              </div>
              <small>11.08.2016</small>
              <h3><a href="asd" title="">Verear qualisque ex minimum...</a></h3>
            </li>
            <li>
              <div className="alignleft">
                <a href="asd0"><img src={"/images/recipes/" + this.props.similar.urlToImg} alt={this.props.similar.name} /></a>
              </div>
              <small>11.08.2016</small>
              <h3><a href="asd" title="">Verear qualisque ex minimum...</a></h3>
            </li>
            <li>
              <div className="alignleft">
                <a href="asd0"><img src={"/images/recipes/" + this.props.similar.urlToImg} alt={this.props.similar.name} /></a>
              </div>
              <small>11.08.2016</small>
              <h3><a href="asd" title="">Verear qualisque ex minimum...</a></h3>
            </li>
          </ul>
        </div>
        <div className="widget">
          <div className="widget-title">
            <h4>Blog Categories</h4>
          </div>
          <ul className="cats">
            <li><a href="asd">Admissions <span>(12)</span></a></li>
            <li><a href="asd">News <span>(21)</span></a></li>
            <li><a href="asd">Events <span>(44)</span></a></li>
            <li><a href="asd">Focus in the lab <span>(31)</span></a></li>
          </ul>
        </div>
        <div className="widget">
          <div className="widget-title">
            <h4>Popular Tags</h4>
          </div>
          <div className="tags">
            <a href="asd">Information tecnology</a>
            <a href="asd">Students</a>
            <a href="asd">Community</a>
            <a href="asd">Carreers</a>
            <a href="asd">Literature</a>
            <a href="asd">Seminars</a>
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
