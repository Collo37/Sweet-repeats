import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import classes from "../css/Categories.module.css";

const Categories = () => {
  const categories = {
    "New Arrivals":
      "https://images.pexels.com/photos/2560328/pexels-photo-2560328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Tops: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "Pants and Shorts":
      "https://images.pexels.com/photos/9749347/pexels-photo-9749347.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    Dresses:
      "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Skirts:
      "https://images.pexels.com/photos/9769870/pexels-photo-9769870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Jackets:
      "https://images.pexels.com/photos/7479859/pexels-photo-7479859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Sweaters:
      "https://images.pexels.com/photos/7036521/pexels-photo-7036521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Bralettes:
      "https://images.pexels.com/photos/9452971/pexels-photo-9452971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  const history = useHistory();
  return (
    <div className={classes.Container}>
      <Navbar />
      <div className={classes.Categories}>
        <h2 style={{ display: "block", width: "100%", color: "gray" }}>
          Categories
        </h2>
        {Object.keys(categories).map((category) => {
          let categoryImage = categories[category];
          return (
            <div
              key={Math.floor(Math.random() * 1000)}
              className={classes.Product}
              onClick={() => history.push(`/categories/${category}`)}
            >
              <img src={categoryImage} alt="category" />
              <div className={classes.ProductTitle}>{category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
