import { useHistory } from "react-router-dom";
import classes from "../css/CategoryMenu.module.css";
import { products } from "../data/products";

const CategoryMenu = () => {
  const history = useHistory();
  let allCategoriesArray = [];
  products.forEach((product) => {
    allCategoriesArray.push(product.categories);
  });
  const categories = allCategoriesArray.reduce(
    (arr, category) => arr.concat(category),
    []
  );
  const filteredCategories = [];
  for (let count = 0; count < categories.length; count++) {
    let category = categories[count];
    if (filteredCategories.includes(category)) {
      continue;
    }
    filteredCategories.push(category);
  }
  const categoryClickedHandler = (id) => {
    history.push(`/categories/${id}`)
  }
  return (
    <div className={classes.Container}>
      {filteredCategories.map((category) => {
        return (
          <div className={classes.category} key={category} onClick={() => categoryClickedHandler(category)}>
            {category}
          </div>
        );
      })}
      <div className={classes.category}>See All</div>
    </div>
  );
};

export default CategoryMenu;
