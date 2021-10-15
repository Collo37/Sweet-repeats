import { useHistory } from "react-router-dom";
import classes from "../css/CategoryMenu.module.css";

const CategoryMenu = () => {
  const history = useHistory();
  const filteredCategories = [
    "New Arrivals",
    "Tops",
    "Pants and Shorts",
    "Bralettes",
    "Dresses",
    "Skirts",
    "Sweaters",
  ];
  const categoryClickedHandler = (id) => {
    history.push(`/categories/${id}`);
  };
  return (
    <div className={classes.Container}>
      {filteredCategories.map((category) => {
        return (
          <div
            className={classes.category}
            key={category}
            onClick={() => categoryClickedHandler(category)}
          >
            {category}
          </div>
        );
      })}
      <div
        className={classes.category}
        onClick={() => categoryClickedHandler("")}
      >
        See All
      </div>
    </div>
  );
};

export default CategoryMenu;
