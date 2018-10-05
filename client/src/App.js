import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// pages
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipe" component={Recipe} />
          <Route strict exact path="/login" component={Login} />
          <Route strict exact path="/admin" component={Admin} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
