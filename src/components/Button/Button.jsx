import React from "react";
import ClassNames from "classnames";
import "./Button.css";

function Button({ name, image, notActive }) {
  return (
    <>
      <button className={ClassNames("button", notActive ? "notActive" : "")}>
        {image ? (
          <img class="button__image" src={image} alt="button__image" />
        ) : (
          ""
        )}
        {name && name}
      </button>
    </>
  );
}

export default Button;
