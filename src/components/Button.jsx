import React from "react";

const Button = (props) => {
  return (
    <a
      href={props.href}
      rel="noreferrer"
      target="_blank"
      className={`button-primary ${props.className}`}
    >
      {props.children}
    </a>
  );
};

export default Button;
