import React from "react";
import * as C from "./style";

const Button = ({ Text, onClick, type = "button" }) => {
  return <C.Button onClick={onClick} type={type}>{Text}</C.Button>;
};

export default Button;
