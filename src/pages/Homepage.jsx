// import BottomBar from "../components/BottomBar";
import CategoryMenu from "../components/CategoryMenu";
import Navbar from "../components/Navbar";
import ProductsContainer from "../components/ProductsContainer";
import ProductSlider from "../components/ProductSlider";
import classes from "../css/Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes.Homepage}>
      <Navbar />
      <div className={classes.ProcuctsContainer}>
        <ProductSlider />
        <CategoryMenu />
        <ProductsContainer />
      </div>
    </div>
  );
};

export default Homepage;
