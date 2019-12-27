import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home  from './component/Home';
import Users  from './component/Users';
import DetailUsers  from './component/DetailUsers';
import Todo from './component/Todo';
import M from "materialize-css/dist/js/materialize.min.js";
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'jquery'; 
function NoMatch(){
  return <h2>404, Jodoh Not Found</h2>
}
class App extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");

    var instance = M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });
    window.$(".dropdown-trigger").dropdown();
  }
  render(){
    return (
      <BrowserRouter>
        <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><Link to="/todo">Todo</Link></li>
          {/* <li className="divider"></li> */}
          <li><Link to="/">Calculator</Link></li>
          <li><Link to="/">Maps</Link></li>
        </ul>
          <nav className="grey darken-3">
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">AbdulAPP</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/users">User</Link></li>
                  <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Apps<i className="material-icons right">arrow_drop_down</i></a></li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">User</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>

          <main>
            <Switch>
              <Route path="/" exact component={Home}  />
              <Route path="/users" exact component={Users}  />
              <Route path="/todo" exact component={Todo}  />
              <Route path="/users/:name" exact component={DetailUsers}  />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
