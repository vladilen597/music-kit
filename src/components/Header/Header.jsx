import React, { useState } from "react";

import "./Header.scss";
import logo from "../../resourses/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { RiHome2Fill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";
import { Drawer } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [right, setRight] = useState(false);

  const toggleDrawer = () => {
    setRight((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header-logo-tagline">
        <img className="header-logo" src={logo} />
        <h1 className="header-logo-h1">
          Music<span>Kit</span>
        </h1>
      </div>
      <button className="drawer-button" onClick={toggleDrawer}>
        <HiOutlineMenu className="drawer-icon" />
      </button>
      <Drawer anchor={"right"} open={right} onClose={toggleDrawer}>
        <section className="drawer">
          <div className="logo">
            <img src={logo} className="drawer-logo" />
            <h1 className="header-logo-h1 drawer-h1">
              Music<span>Kit</span>
            </h1>
          </div>
          <ul className="drawer-list">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="link"
              onClick={toggleDrawer}
            >
              <li className="drawer-list-item">
                <RiHome2Fill className="link-icon home-icon" />
                <span>HOME</span>
              </li>
            </NavLink>
            <NavLink
              exact
              to="/favorites"
              activeClassName="active"
              className="link"
              onClick={toggleDrawer}
            >
              <li className="drawer-list-item">
                <BsFillHeartFill className="link-icon favourite-icon" />
                <span>FAVORITES</span>
              </li>
            </NavLink>
          </ul>
        </section>
      </Drawer>
    </header>
  );
};

export default Header;
