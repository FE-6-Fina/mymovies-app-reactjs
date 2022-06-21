import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";
import Header from "../components/Header";
import { ThemeContext } from "../utils/context";
import { reduxAction } from "../utils/redux/actions/action";

function RoutesApp() {
  const dispatch = useDispatch();
  const [theme] = useState("light");
  const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState("");
  const [dataMovie, setDataMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchData() {
      axios
        .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then((res) => {
          console.log(res);
          const { results } = res.data; //destructuring
          // const result = res.data.results;
          setMovie(results);
          // this.setState({ data: results });
        })
        .catch((err) => {})
        .finally(() => setLoading({ loading: false }));
    }
  }, []);

  useEffect(() => {
    const tempLocal = localStorage.getItem("favMovie");
    if (tempLocal) {
      dispatch(reduxAction("SET_FAVORITES", JSON.parse(tempLocal)));
    }
  }, []);

  function fetchData() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((res) => {
        console.log(res);
        const { results } = res.data; //destructuring
        // const result = res.data.results;
        setMovie(results);
        // this.setState({ data: results });
      })
      .catch((err) => {})
      .finally(() => setLoading({ loading: false }));
  }

  return (
    <BrowserRouter value={theme}>
      <ThemeContext.Provider>
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
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
export default RoutesApp;
