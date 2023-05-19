import React from "react";

const Button = (props) => {
  return (
    <a href="#" className={`button-primary ${props.className}`}>
      {props.children}
    </a>
  );
};

export default Button;
