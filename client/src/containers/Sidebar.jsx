import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import LogoImageURL from "../assets/Logo.svg";
import AvatarImageURL from "../assets/Avatar.jpg";
import {
  RiSettingsLine,
  RiQuillPenLine,
  RiGuideLine,
  RiLockLine,
  RiDatabase2Line,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = ({ menuActive, onChange }) => {
  const [active, setActive] = useState(menuActive);

  useEffect(() => setActive(menuActive), [menuActive]);

  const handleButtonCloseClick = (e) => {
    if (menuActive) {
      setActive(false);
      onChange(e);
    }
  };

  return (
    <div
      id="sidebar"
      className={`sidebar white text-grey-1 ${
        menuActive ? "opened" : "closed"
      }`}
      onChange={(e) => {
        handleOnChange(e);
      }}
    >
      {/* HEADING */}
      <div className="sidebar-heading py-2 px-1 mb-0">
        <img src={LogoImageURL} alt="logo" />
        <button onClick={handleButtonCloseClick}>
          <RiCloseLine />
        </button>
      </div>

      {/* CONTENT */}
      <div className="sidebar-content">
        <div className="sidebar-pages py-2">
          <ul>
            <li className="sidebar-link d-flex pa-1 text-grey-2">
              <RiGuideLine size={"1.5rem"} />
              {active ? (
                <p className="ma-0 text-weight-medium">DevOps</p>
              ) : (
                <></>
              )}
            </li>
            <li className="sidebar-link d-flex pa-1 text-grey-2">
              <RiQuillPenLine size={"1.5rem"} />
              {active ? (
                <p className="ma-0 text-weight-medium">Design</p>
              ) : (
                <></>
              )}
            </li>
            <li className="sidebar-link d-flex pa-1 text-grey-2">
              <RiLockLine size={"1.5rem"} />
              {active ? (
                <p className="ma-0 text-weight-medium">Security</p>
              ) : (
                <></>
              )}
            </li>
            <li className="sidebar-link d-flex pa-1 text-grey-2">
              <RiDatabase2Line size={"1.5rem"} />
              {active ? (
                <p className="ma-0 text-weight-medium">Analytics</p>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
        <div className="sidebar-user py-2 py-1">
          <div className="sidebar-link pa-1 text-grey-2">
            <RiSettingsLine size={"1.5rem"} />
            {active ? (
              <p className="ma-0 text-weight-medium">Settings</p>
            ) : (
              <></>
            )}
          </div>
          <div className="sidebar-user-avatar px-1">
            <img className="mt-1" src={AvatarImageURL} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
