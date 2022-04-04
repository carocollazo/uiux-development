import React, { Component } from "react";
import PlantItem from "./PlantItem";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.list = props.cartList;
    this.isCart = true;
  }

  cartStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    backgroundColor: "#869b46",
    marginTop: 30,
    marginLeft: 30,
    paddingTop: 20,
    borderRadius: 8
  };

  cartTitle = {};

  itemsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: 15,
    padding: 15,
    width: 420
  };

  render() {
    return (
      <div style={this.cartStyle}>
        {this.props.totalPrice > 0 && (
          <div>
            <div style={this.cartTitle}>
              <b>Cart</b>
            </div>
            <div>Total: ${this.props.totalPrice}</div>
            <div style={this.itemsStyle}>
              {this.list.map(item => (
                <PlantItem
                  item={item}
                  isCart={this.isCart}
                  onPlus={this.props.onPlus}
                  onMinus={this.props.onMinus}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
