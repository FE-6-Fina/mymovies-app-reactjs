import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default class CardComponents extends Component {
  render() {
    return (
      <>
        <Card className="container grow p-3 flex flex-col mb-10 rounded-lg justify-between items-center bg-slate-800 md:bg-slate-600">
          <CardMedia component="img" className="container w-20 h-50 rounded-[6px]" alt={this.props.title} src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} />
          <CardContent>
            <p className="text-slate-800 font-bold text-lg text-center">{this.props.title}</p>
          </CardContent>
          <CardActions>
            <Button className="bg-slate-500 text-slate-900 px-4 py-3 rounded-md " onClick={this.props.onClickDetail}>
              Detail
            </Button>
            <Button className="bg-slate-500 text-slate-900 px-4 py-3 rounded-md " onClick={this.props.onClickFav}>
              Add to favorite
            </Button>
          </CardActions>
        </Card>
      </>
    );
  }
}

// <div class="container mx-auto px-6 font-inter sm:flex sm:flex-wrap sm:gap-6 evenlysm:justify-a">
//   <div class="container rounded-md shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72">
//     <img alt={this.props.image} src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} class="w-full" />
//     <div class="px-6 py-4">
//       <div class="font-bold text-xl mb-2 text-slate-700">{this.props.title}</div>
//     <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aliquam?</p>
//   </div>
// </div>
