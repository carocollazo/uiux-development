import React, { Component } from "react";
import PlantItem from "./PlantItem";

export default class DisplayList extends Component {
  constructor(props) {
    super(props);
    this.isCart = false;
  }

  imgSrc =
    "https://www.gardeningknowhow.com/wp-content/uploads/2012/03/houseplant-sansevieria.jpg";

  listStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: 700,
    textAlign: "center",
    gap: 45,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    paddingBottom: 40
  };

  render() {
    return (
      <div style={this.listStyle}>
        {this.props.list
          .filter(this.props.matchesSize)
          .filter(this.props.matchesLight)
          .sort(this.props.matchesSort)
          .map(item => (
            <PlantItem
              item={item}
              isCart={this.isCart}
              onPlus={this.props.onPlus}
              onMinus={this.props.onMinus}
            />
          ))}
      </div>
    );
  }
}
