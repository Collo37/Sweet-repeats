import { Link } from "react-router-dom";
import classes from "../css/SideBar.module.css";
const SideBar = () => {
  return (
    <div className={classes.SideBar}>
      <h2>
        <Link style={{ textDecoration: "none", color: "#fb8500" }} to="/">
          Home
        </Link>
      </h2>
      <h2>
        <Link
          style={{ textDecoration: "none", color: "#fb8500" }}
          to="/categories"
        >
          Categories
        </Link>
      </h2>
      <h2>
        <Link style={{ textDecoration: "none", color: "#fb8500" }} to="/cart">
          Cart
        </Link>
      </h2>
      <h2>
        <Link style={{ textDecoration: "none", color: "#fb8500" }} to="/">
          Favorites
        </Link>
      </h2>
    </div>
  );
};

export default SideBar;
