import React, { useState, useEffect } from "react";
import { withRouter } from "../utils/navigation";

import axios from "axios";

const Detail = (props) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=0de0818bd70518c19b085d60b4f0913a&language=en-US
  function fetchData() {
    const { movie_id } = props.params;
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res, "---> res");
        const { data } = res;
        setData(data);
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }
  const fontStyle = "font-inter font-semibold text-start pt-3 my-30 text-xl";

  if (loading) {
    return <h3>loading...</h3>;
  }
  return (
    <div className="w-full flex item-center justify-center lg:flex-col">
      <div className="flex items-center" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className=" bg-white bg-opacity-50 flex flex-col items-center justify-center p-16">
          <img className="h-[400px] flex items-center justify-center" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="poster movie" />

          <div>
            {/* bikin tabel */}
            <h2 className="font-bold font-inter text-center pt-4 text-2xl">{data.title}</h2>
            <h3 className={fontStyle}>Gendre : </h3>
            {data.genres.map((genre) => (
              <h3 className="font-inter text-base font-semibold">{genre.name}</h3>
            ))}
            <h3 className={fontStyle}>Release Date : </h3>
            <h3 className="font-inter text-base font-semibold">{data.release_date}</h3>
            <h3 className={fontStyle}>Status : </h3>
            <h3 className="font-inter text-base font-semibold">{data.status}</h3>
            <h3 className={fontStyle}>Overview : </h3>
            <h3 className="font-inter text-base font-medium">{data.overview}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Detail);
