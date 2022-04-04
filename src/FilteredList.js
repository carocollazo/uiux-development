import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import DisplayList from "./DisplayList.js";
import Cart from "./Cart.js";

export default class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.lights = ["All", "Low Light", "Medium Light", "Bright Light"];
    this.sizes = ["All", "Medium", "Large", "Desktop"];
    this.state = {
      size: "All",
      light: "All",
      sort: "All",
      totalPrice: 0,
      cartList: []
    };
  }

  onSelectFilterSize = event => {
    this.setState({
      size: event,
      light: this.state.light,
      sort: this.state.sort,
      totalPrice: this.state.totalPrice,
      cartList: this.state.cartList
    });
    for (let i; i < this.sizes.length; i++) {
      if (this.sizes[i] === event) {
        document.getElementById("size" + event).style.color = "white";
      } else {
        document.getElementById("size" + event).style.color = "black";
      }
    }
  };

  matchesFilterSize = item => {
    if (this.state.size === "All") {
      return true;
    } else if (this.state.size === item.size) {
      return true;
    } else {
      return false;
    }
  };

  onSelectFilterLight = event => {
    this.setState({
      size: this.state.size,
      light: event,
      sort: this.state.sort,
      totalPrice: this.state.totalPrice,
      cartList: this.state.cartList
    });
    for (let i; i < this.sizes.length; i++) {
      if (this.lights[i] === event) {
        console.log("lol");
        document.getElementById("light" + event).style.color = "white";
      } else {
        document.getElementById("light" + event).style.color = "black";
      }
    }
  };

  matchesFilterLight = item => {
    if (this.state.light === "All") {
      return true;
    } else if (this.state.light === item.light) {
      return true;
    } else {
      return false;
    }
  };

  onSort = event => {
    this.setState({
      size: this.state.size,
      light: this.state.light,
      sort: event.target.value,
      totalPrice: this.state.totalPrice,
      cartList: this.state.cartList
    });
  };

  matchesSort = (a, b) => {
    if (this.state.sort === "all") {
      return a;
    } else if (this.state.sort === "high2low") {
      return b.price - a.price;
    } else if (this.state.sort === "low2high") {
      return a.price - b.price;
    }
  };

  onPlus = item => {
    let list = this.state.cartList;
    const price = this.state.totalPrice + item.price;
    let flag = 0;
    list.forEach(plant => {
      if (plant.name === item.name) {
        plant.cnt = plant.cnt + 1;
        flag = 1;
      }
    });
    if (!flag) {
      item.cnt = 1;
      list.push(item);
    }
    this.setState({
      size: "All",
      light: "All",
      sort: "All",
      totalPrice: price,
      cartList: list
    });
  };

  onMinus = item => {
    let list = this.state.cartList;
    let price = this.state.totalPrice;
    let i = 0;
    list.forEach(plant => {
      if (plant.name === item.name) {
        price = price - item.price;
        if (plant.cnt > 1) {
          plant.cnt = plant.cnt - 1;
        } else {
          list.splice(i, 1);
        }
      }
      i++;
    });
    this.setState({
      size: "All",
      light: "All",
      sort: "All",
      totalPrice: price,
      cartList: list
    });
  };

  containerStyle = { display: "flex" };

  leftPanelStyle = {
    marginLeft: 30,
    marginTop: 30,
    marginRight: 30,
    height: "100%",
    width: 150,
    backgroundColor: "#869b46",
    borderRadius: 8
  };

  centerPanerStyle = {};

  titleStyle = { color: "black", fontFamily: "papyrus", fontSize: "300%" };

  navStyle = {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    gap: 10
  };

  navLinkStyle = {
    color: "black",
    textDecoration: "none"
  };

  selectStyle = { border: "none", fontSize: 15 };

  render() {
    return (
      <div style={this.containerStyle}>
        <div
          id="leftPanel"
          style={this.leftPanelStyle}
          aria-label="Main Navigation"
          role="navigation"
        >
          <Nav
            style={this.navStyle}
            onSelect={this.onSelectFilterSize}
            activeKey="All"
            aria-label="Size Filter Navigation"
          >
            <Nav.Item>
              <b>Size:</b>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id="sizeAll" eventKey="All" style={this.navLinkStyle}>
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                id="sizeMedium"
                eventKey="Medium"
                style={this.navLinkStyle}
              >
                Medium
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                id="sizeLarge"
                eventKey="Large"
                style={this.navLinkStyle}
              >
                Large
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                id="sizeDesktop"
                eventKey="Desktop"
                style={this.navLinkStyle}
              >
                Desktop
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav
            style={this.navStyle}
            onSelect={this.onSelectFilterLight}
            activeKey="All"
            aria-label="Light Filter Navigation"
          >
            <Nav.Item>
              <b>Light:</b>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id="lightAll" eventKey="All" style={this.navLinkStyle}>
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                id="lightLow Light"
                eventKey="Low Light"
                style={this.navLinkStyle}
              >
                Low Light
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                id="lightMedium Light"
                eventKey="Medium Light"
                style={this.navLinkStyle}
              >
                Medium Light
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                id="lightBrightLight"
                eventKey="Bright Light"
                style={this.navLinkStyle}
              >
                Bright Light
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div style={this.navStyle} aria-label="Price Sort Navigation">
            <label>
              <b>Sort:</b>
            </label>
            <select
              value={this.state.sort}
              style={this.selectStyle}
              onChange={this.onSort}
            >
              <option value="all" selected>
                Choose Sort
              </option>
              <option value="low2high">Lowest to high</option>
              <option value="high2low">Highest to Low</option>
            </select>
          </div>
        </div>

        <div id="centerPanel" aria-label="Center Panel">
          <h1 style={this.titleStyle} aria-label="Page Title">
            CS1300 Plant Shop
          </h1>
          <DisplayList
            list={this.props.list}
            matchesSize={this.matchesFilterSize}
            matchesLight={this.matchesFilterLight}
            matchesSort={this.matchesSort}
            onPlus={this.onPlus}
            onMinus={this.onMinus}
          />
        </div>
        <div id="rightPanel" aria-label="Shopping Cart">
          <Cart
            totalPrice={this.state.totalPrice}
            cartList={this.state.cartList}
            onPlus={this.onPlus}
            onMinus={this.onMinus}
          />
        </div>
      </div>
    );
  }
}
