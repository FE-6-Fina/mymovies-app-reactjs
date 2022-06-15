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

  // handleClick(item) {
  //   const temp = this.state.dataMovie.slice();
  //   temp.push(item);
  //   this.setState({ dataMovie: temp });
  // }

  render() {
    return (
      <div>
        <>
          <Header />
          <Home />
          {/* <Detail />
          <Favorite /> */}
        </>
      </div>
    );
  }
}
