import React from "react";
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";
import classes from "../css/ProductPage.module.css";
import { products } from "../data/products";

const ProductPage = () => {
  const product = products[0];
  const keys = Object.keys(product.items);
  return (
    <div className={classes.Container}>
      <Navbar />
      <div className={classes.ProductsContainer}>
        <p>{product.title}</p>
        {keys.map((key) => {
          return <ProductItem key={key} item={product.items[key]} />;
        })}
      </div>
    </div>
  );
};

export default ProductPage;
