import CardComponents from "../components/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "../utils/navigation";
import { useNavigate, useParams } from "react-router-dom";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [dataMovie, setDataMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  //???
  // handleClick(item) {
  //   const temp = this.state.dataMovie.slice();
  //   temp.push(item);
  //   this.setState({ dataMovie: temp });
  // }

  function fetchData() {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=0de0818bd70518c19b085d60b4f0913a&language=en-US&page=1")
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
          <CardComponents key={item.id} title={item.title} image={item.poster_path} onClickCard={() => navigate(`detail/${item.id}`)} onClickFav={() => navigate(`favorite/${item.id}`)} />
        ))}
      </div>
    </>
  );
};

export default withRouter(Home);
