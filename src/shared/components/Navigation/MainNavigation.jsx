import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/BackDrop";

import "./style/MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsopen] = useState(false);

  const openDrawer = () => {
    setDrawerIsopen(true);
  }

  const closeDrawer = () => {
    setDrawerIsopen(false);
  }

  return (
    <>
    {drawerIsOpen && (
      <BackDrop onClick={closeDrawer}/>
    )}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link>YourPlaces</Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
