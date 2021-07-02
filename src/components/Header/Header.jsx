import React from "react";

import "./Header.scss";
import logo from "../../resourses/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { Drawer } from "@material-ui/core";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-tagline">
        <img className="header-logo" src={logo} />
        <h1 className="header-logo-h1">
          Music<span>Kit</span>
        </h1>
      </div>
      <button className="drawer-button">
        <HiOutlineMenu className="drawer-icon" />
      </button>
      <Drawer></Drawer>
    </header>
  );
};

export default Header;
