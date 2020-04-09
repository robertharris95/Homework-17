import React, { Component } from "react";
import Header from "./components/Header"
import Search from "./components/Search"
import Favs from "./components/Favs"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <hr/>
      <Route exact path="/" component={Search}/>
      <Route exact path="/favs" component={Favs}/>
      </Router>
    </>
  );
}


export default App;
