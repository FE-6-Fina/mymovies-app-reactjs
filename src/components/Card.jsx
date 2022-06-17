import React, { Component } from "react";
import CardMedia from "@mui/material/CardMedia";

export default class CardComponents extends Component {
  render() {
    return (
      <>
        <div className="container grow p-3 flex flex-col mb-10 mx-4 shadow-md border-2 justify-between items-center rounded-md bg-stone-800">
          <div className="cursor-pointer" onClick={this.props.onClickCard}>
            <CardMedia component="img" className="container w-20 h-50 rounded-[6px]" alt={this.props.title} src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} />
            <div>
              <p className="text-white font-inter font-font-normal text-lg text-center my-5">{this.props.title}</p>
            </div>
          </div>
          <div>
            <button className="bg-red-700 text-white text-sm font-inter font-normal p-3 rounded-md mb-2" onClick={this.props.onClickFav}>
              Add to favorite
            </button>
            <button>{this.props.detail}</button>
          </div>
        </div>
      </>
    );
  }
}
