import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import Header from "./components/Header";
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    data: [],
    title: "Welcome",
    dataMovie: [],
  };

  render() {
    return (
      <div>
        <>
          <Header />
          <Home />
          <Detail />
          <Favorite />
        </>
      </div>
    );
  }
}
