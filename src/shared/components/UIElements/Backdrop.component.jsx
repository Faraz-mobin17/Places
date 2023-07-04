import React from "react";
import ReactDOM from "react-dom";
import "./css/Backdrop.css";
export const Backdrop = (props) => {
  const content = <div className="backdrop" onClick={props.onClick}></div>;

  return ReactDOM.createPortal(
    content,
    document.querySelector("#backdrop-hook")
  );
};
