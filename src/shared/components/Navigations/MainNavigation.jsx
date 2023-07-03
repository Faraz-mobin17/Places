import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { MainHeader } from "./MainHeader";
import "./css/MainNavigation.css";
export const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your Places</Link>
      </h1>
      <nav>...</nav>
    </MainHeader>
  );
};