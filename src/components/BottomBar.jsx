import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import classes from "../css/BottomBar.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const BottomBar = () => {
  return (
    <div className={classes.BottomBar}>
      <div>
        <HomeOutlinedIcon style={{ color: "white" }} />
        Home
      </div>
      <div>
        <FavoriteBorderOutlinedIcon style={{ color: "white" }} />
        Favorites
      </div>
      <div>
        <PersonOutlineOutlinedIcon style={{ color: "white" }} />
        Profile
      </div>
    </div>
  );
};

export default BottomBar;
