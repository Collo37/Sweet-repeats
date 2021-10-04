import React from "react";

const Modal = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "10",
      }}
      onClick={props.clicked}
    ></div>
  );
};

export default Modal;
