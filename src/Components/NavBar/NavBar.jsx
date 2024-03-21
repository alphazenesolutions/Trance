import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assests/Screenshot_2024-02-21_at_20.20 1.svg";

const NavBar = () => {
  const [isSelect, setSelect] = useState("home");
  const navHandler = (e) => {
    setSelect(e.target.id);
  };
  return (
    <div>
      <div className="navBar">
        <img src={logo} alt="" />
        <div className="menu">
          <div className="menuItems">
            {isSelect == "home" && <div className="dot"></div>}
            <p
              className={
                isSelect == "home" ? "menuItemActive" : "menuItemDisable"
              }
              onClick={navHandler}
              id="home"
            >
              Home
            </p>
          </div>
          <div className="menuItems">
            {isSelect == "about" && <div className="dot"></div>}
            <p
              className={
                isSelect == "about" ? "menuItemActive" : "menuItemDisable"
              }
              onClick={navHandler}
              id="about"
            >
              About Us
            </p>
          </div>
          <div className="menuItems">
            {isSelect == "blog" && <div className="dot"></div>}
            <p
              className={
                isSelect == "blog" ? "menuItemActive" : "menuItemDisable"
              }
              onClick={navHandler}
              id="blog"
            >
              Blogs
            </p>
          </div>
        </div>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default NavBar;
