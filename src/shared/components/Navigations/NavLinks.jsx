import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./css/NavLinks.css";
export const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      <li>
        <NavLink to="/">My Places</NavLink>
      </li>
      <li>
        <NavLink to="/">Add Places</NavLink>
      </li>
      <li>
        <NavLink to="/">Authenticate</NavLink>
      </li>
    </ul>
  );
};
