import classes from "../css/Navbar.module.css";
import { useHistory } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "./Modal";
import SideBar from "./SideBar";
import { useState } from "react";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const logoClickedHandler = () => {
    history.push("/");
  };
  const showCartHandler = () => {
    history.push("/cart");
  };
  const showSideBarHandler = () => {
    setShowSideBar(true);
    setShowModal(true);
  };

  const modalClickedHandler = () => {
    setShowModal(!showModal);
    setShowSideBar(false);
  };
  return (
    <div className={classes.Navbar}>
      {showSideBar && <SideBar />}
      {showModal && <Modal clicked={modalClickedHandler} />}
      <MenuIcon
        style={{ flex: "1", cursor: "pointer" }}
        onClick={showSideBarHandler}
      />
      <div className={classes.Logo} onClick={logoClickedHandler}>
        Sweet Repeats
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "1",
        }}
      >
        <Badge
          badgeContent={1}
          color="secondary"
          onClick={showCartHandler}
          style={{ marginRight: "0.8rem", color: "#fb8500" }}
        >
          <ShoppingBasketIcon />
        </Badge>
      </div>
    </div>
  );
};

export default Navbar;
