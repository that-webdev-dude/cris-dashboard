import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
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
    <div id="navbar" className="navbar">
      <div className="navbar-title">
        <button
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
        <p className="navbar-title-text ma-0 display-5">{pageTitle}</p>
      </div>
      <div className="navbar-input">
        <Autocomplete
          userOptions={userOptions}
          onUserSelection={handleUserSelection}
        />
      </div>
    </div>
  );
};

export default Navbar;
