import React from "react";

const Toast = ({ text }) => {
  const style = {
    backgroundColor: "deeppink",
    height: "20px",
    color: "white",
  };
  return (
    <div style={style}>
      <p>{text}</p>
    </div>
  );
};

export default Toast;
