import CardComponents from "../components/Card";
import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    data: [],
    title: "Welcome",
    dataMovie: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=0de0818bd70518c19b085d60b4f0913a&language=en-US&page=1")
      .then((res) => {
        console.log(res);
        const { results } = res.data; //destructuring
        // const result = res.data.results;
        this.setState({ data: results });
      })
      .catch((err) => {})
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    return (
      <>
        {this.state.data.map((item) => (
          <CardComponents key={item.id} title={item.title} image={item.poster_path} />
        ))}
      </>
    );
  }
}

export default Home;
