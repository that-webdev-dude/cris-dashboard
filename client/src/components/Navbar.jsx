import React from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiSearchLine,
  RiEqualizerLine,
} from "react-icons/ri";
import { Autocomplete } from "../components";
import "./Navbar.scss";

const Navbar = ({
  onMenuClick,
  menuActive,
  pageTitle,
  userOptions,
  onUserSelection,
}) => {
  // handlers
  const handleMenuClick = (e) => {
    e.preventDefault();
    onMenuClick();
  };

  const handleUserSelection = (userSelection) => {
    onUserSelection(userSelection);
  };

  return (
    <div id="navbar" className="navbar pa-2 text-grey-1 text-weight-bold">
      <div className="navbar-title">
        <button
          className="px-1 mr-1"
          onClick={(e) => {
            handleMenuClick(e);
          }}
        >
          {menuActive ? (
            <RiCloseLine size={"1.125rem"} />
          ) : (
            <RiMenu3Line size={"1.125rem"} />
          )}
        </button>
        <p className="navbar-title-text ma-0 display-5">
          Dashboard{" "}
          <small className="text-primary text-weight-medium">{pageTitle}</small>
        </p>
      </div>
      <div className="navbar-input mr-2">
        <Autocomplete
          userOptions={userOptions}
          onUserSelection={handleUserSelection}
        />
        {/* <button className="navbar-input-search">
          <RiSearchLine size={"1.125rem"} />
        </button>
        <input
          className="navbar-input-text"
          type="text"
          placeholder="Search Dashboard"
        />
        <button className="navbar-input-filter">
          <RiEqualizerLine size={"1.125rem"} />
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
