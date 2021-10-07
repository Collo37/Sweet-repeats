import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import classes from "../css/Categories.module.css";
import { products } from "../data/products";

const Categories = () => {
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
  return (
    <div className={classes.Container}>
      <Navbar />
      <div className={classes.Categories}>
        <h2 style={{ display: "block", width: "100%", color: "gray" }}>
          Categories
        </h2>
        {filteredCategories.map((category) => {
          let categoryImage = [];
          products.forEach((product) => {
            if (product.categories.includes(category)) {
              categoryImage.push(product);
            }
          });
          return (
            <div
              key={Math.floor(Math.random() * 1000)}
              className={classes.Product}
              onClick={() => history.push(`/categories/${category}`)}
            >
              <img
                src={
                  categoryImage[
                    Math.floor(Math.random() * categoryImage.length)
                  ].productImages[0]
                }
                alt="category"
              />
              <div className={classes.ProductTitle}>{category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
