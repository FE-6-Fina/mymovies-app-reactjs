import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoo.png";

const Header = () => {
  return (
    <div className="sticky flex justify-between items-center  shadow-md mx-5 text-slate-900 text-lg font-semibold font-inter">
      <img className="flex " to="/" src={logo} alt="logo" />
      <ul className="pl-16">
        <Link to="/" className="px-6">
          Home
        </Link>
        <Link to="/detail" className="px-6">
          Detail
        </Link>
        <Link to="/favorite" className="px-6">
          Favorite
        </Link>
      </ul>
    </div>
  );
};

export default Header;
