import React, { Component } from "react";
import Header from "./components/Header"
import Results from "./components/Results"
import Search from "./components/Search"
import Favs from "./components/Favs"
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <hr/>
      <Route exact path="/" component={Search} />
      <Routeexact path="/favs" component={Favs}/>
      <br/>
      <hr/>
      <Results/>
      </Router>
    </>
  );
}


export default App;
