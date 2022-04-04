import React, { Component } from "react";

export default class PlantItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imgSrc =
    "https://www.gardeningknowhow.com/wp-content/uploads/2012/03/houseplant-sansevieria.jpg";

  styles = {
    itemStyle: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      height: 470,
      backgroundColor: "white",
      borderRadius: 5,
      gap: 8
    },

    imgStyle: { width: 200, borderTopRightRadius: 8, borderTopLeftRadius: 8 },

    plantNameStyle: { marginTop: 5, fontSize: 25 },

    plantSizeStyle: { fontStyle: "italic", fontSize: 18 },

    plantLightStyle: {},

    plantPriceStyle: { fontSize: 25 },

    addPlantButtonStyle: {
      width: 70,
      height: 30,
      marginLeft: "auto",
      marginRight: "auto",
      borderColor: "none",
      borderRadius: 8,
      backgroundColor: "#568203"
    },
    plantCntStyle: {
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto"
    },

    plantCntButtonStyle: {
      width: 30,
      height: 30,
      color: "white",
      borderColor: "none",
      borderRadius: 8,
      backgroundColor: "#568203"
    }
  };

  render() {
    return (
      <div style={this.styles.itemStyle}>
        <img
          style={this.styles.imgStyle}
          src={this.imgSrc}
          alt="picture of the plant"
        ></img>
        <div style={this.styles.plantNameStyle}>
          <b>{this.props.item.name}</b>
        </div>
        <div style={this.styles.plantSizeStyle}>{this.props.item.size}</div>
        <div style={this.styles.plantLightStyle}>{this.props.item.light}</div>
        <div style={this.styles.plantPriceStyle}>${this.props.item.price}</div>
        {this.props.isCart && (
          <div style={this.styles.plantCntStyle}>
            <button
              style={this.styles.plantCntButtonStyle}
              onClick={() => this.props.onMinus(this.props.item)}
            >
              <b>-</b>
            </button>
            <div style={{ height: 30, width: 30 }}>{this.props.item.cnt}</div>
            <button
              style={this.styles.plantCntButtonStyle}
              onClick={() => this.props.onPlus(this.props.item)}
            >
              <b>+</b>
            </button>
          </div>
        )}
        {!this.props.isCart && (
          <div>
            <button
              style={this.styles.addPlantButtonStyle}
              onClick={() => this.props.onPlus(this.props.item)}
            >
              Add
            </button>
          </div>
        )}
      </div>
    );
  }
}
