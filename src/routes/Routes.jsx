import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";
import Header from "../components/Header";

export default class RoutesApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:movie_id" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          {/* untuk halaman 404 */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
