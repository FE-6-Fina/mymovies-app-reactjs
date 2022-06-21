import CardComponents from "../components/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "../utils/navigation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/actions/action";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const handleFav = (item) => {
    const tempLocal = localStorage.getItem("favMovie"); ///ambil data movie
    if (tempLocal) {
      const parsed = JSON.parse(tempLocal); //data dari string dijadikan object
      const findItem = parsed.find((el) => el.id === item.id);
      if (!findItem) {
        parsed.push(item);
        localStorage.setItem("favMovie", JSON.stringify(parsed)); //nanti tersimpan di localStorage yang bernama favmovie yang tipenya string
        dispatch(reduxAction("SET_FAVORITES", parsed)); //yang ini tersimpan di globalstate makanya pake dispatch(u/ganti state)
      } else {
        return alert("already added");
      }
    } else {
      localStorage.setItem("favMovie", JSON.stringify([item]));
      dispatch(reduxAction("SET_FAVORITES", [item]));
    }
    alert("add to favorite successed");
  };

  function fetchData() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((res) => {
        console.log(res);
        const { results } = res.data; //destructuring
        // const result = res.data.results;
        setData(results);
        // this.setState({ data: results });
      })
      .catch((err) => {})
      .finally(() => setLoading({ loading: false }));
  }
  return (
    <>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {data.map((item) => (
          <CardComponents key={item.id} title={item.title} image={item.poster_path} onClickCard={() => navigate(`detail/${item.id}`)} onClickFav={() => handleFav(item)} label={"add to favorite"} />
        ))}
      </div>
    </>
  );
};

export default withRouter(Home);
