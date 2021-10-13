import { Link } from "react-router-dom";
import classes from "../css/SideBar.module.css";
const SideBar = () => {
  return (
    <div className={classes.SideBar}>
      <h2>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Home
        </Link>
      </h2>
      <h2>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/categories"
        >
          Categories
        </Link>
      </h2>
      <h2>
        <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
          Cart
        </Link>
      </h2>
      <h2>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/favorites"
        >
          Favorites
        </Link>
      </h2>
    </div>
  );
};

export default SideBar;
