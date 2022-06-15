import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="flex justify-center items-center bg-slate-100 shadow-md  mx-auto text-slate-700 text-lg font-inter px-6 py-1 mb-10">
        <p className="w-full flex text-red-800 text-2xl font-bold font-mono">Watch Now.</p>
        <ul className="flex">
          <li className="p-4">Home</li>
          <li className="p-4">Detail</li>
          <li className="p-4">Favorite</li>
        </ul>
      </div>
    );
  }
}

export default Header;
