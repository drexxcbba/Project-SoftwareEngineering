import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { PageNotFound } from "./common";
import Footer from './footer';
import Listado from './listado';
import Header from './header';
import Mosaico from './mosaico';
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Listado}/>
          <Route path="/mosaico" exact component={Mosaico} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
