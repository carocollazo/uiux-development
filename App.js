import "./App.css";
import React, { Component } from "react";
import "./FilteredList.js";
import FilteredList from "./FilteredList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          name: "Cute Plant",
          size: "Medium",
          light: "Low Light",
          price: 34,
          cnt: 0
        },
        {
          name: "Happy Plant",
          size: "Large",
          light: "Medium Light",
          price: 23,
          cnt: 0
        },
        {
          name: "Sad Plant",
          size: "Desktop",
          light: "Bright Light",
          price: 44,
          cnt: 0
        },
        {
          name: "Smart Plant",
          size: "Medium",
          light: "Bright Light",
          price: 22,
          cnt: 0
        },
        {
          name: "Sleepy Plant",
          size: "Desktop",
          light: "Bright Light",
          price: 80,
          cnt: 0
        },
        {
          name: "Crazy Plant",
          size: "Medium",
          light: "Low Light",
          price: 16,
          cnt: 0
        },
        {
          name: "Silly Plant",
          size: "Large",
          light: "Medium Light",
          price: 34,
          cnt: 0
        },
        {
          name: "Funky Plant",
          size: "Desktop",
          light: "Medium Light",
          price: 55,
          cnt: 0
        },
        {
          name: "Green Plant",
          size: "Medium",
          light: "Low Light",
          price: 36,
          cnt: 0
        },
        {
          name: "Rainbow Plant",
          size: "Medium",
          light: "Low Light",
          price: 26,
          cnt: 0
        },
        {
          name: "Old Plant",
          size: "Large",
          light: "Low Light",
          price: 67,
          cnt: 0
        },
        {
          name: "Baby Plant",
          size: "Desktop",
          light: "Medium Light",
          price: 15,
          cnt: 0
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <FilteredList list={this.state.productList}></FilteredList>
      </div>
    );
  }
}
