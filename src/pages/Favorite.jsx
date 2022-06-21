import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardComponents from "../components/Card";
import { withRouter } from "../utils/navigation";
import { useSelector, useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/actions/action";

const Home = (props) => {
  const favorites = useSelector((state) => state.favorites);

  const navigate = useNavigate();

  //bikin fungsi handleRemoveFav
  //terus bikin fungsi filter untuk cari yang dipilih

  const handleRemoveFav = (item) => {
    const tempLocal = localStorage.getItem("favMovie");
    const result = tempLocal.filter(checkFavList);
    function checkFavList(tempLocal) {
      return result;
    }
  };

  return (
    <>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {favorites.map((item) => (
          <CardComponents key={item.id} title={item.title} image={item.poster_path} onClickCard={() => navigate(`detail/${item.id}`)} onClickFav={() => handleRemoveFav(item)} label={"remove from favorite"} />
        ))}
      </div>
    </>
  );
};

export default withRouter(Home);
