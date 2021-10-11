import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest } from "../components/axios";
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";
import classes from "../css/ProductPage.module.css";

const ProductPage = () => {
  const category = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const categoryProducts = await publicRequest.get(
        `/products/?category=${category.category}`
      );
      setProducts(categoryProducts.data);
    };
    getProducts();
  }, [category]);
  const categoryName = category.category;
  return (
    <div className={classes.Container}>
      <Navbar />
      <div className={classes.ProductsContainer}>
        <p>{categoryName}</p>
        {products.map((product) => {
          return (
            <ProductItem
              key={`product_${product.productTitle}`}
              item={product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
