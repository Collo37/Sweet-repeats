import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import classes from "../css/Categories.module.css";
import { products } from "../data/products";

const Categories = () => {
  const history = useHistory();
  return (
    <div className={classes.Container}>
      <Navbar />
      <div className={classes.Categories}>
        <h2 style={{ display: "block", width: "100%", color: "gray" }}>
          Categories
        </h2>
        {products.map((product) => {
          return (
            <div
              key={product.title}
              className={classes.Product}
              onClick={() => history.push("/products")}
            >
              <img src={product.productImage} alt="category" />
              <div className={classes.ProductTitle}>{product.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
