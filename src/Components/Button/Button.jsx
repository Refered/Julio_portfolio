import React from "react";
import "./Button.css";

const Button = ({ text, onclick = null }) => {
  return <button onClick={onclick}>{text}</button>;
};

export default Button;
