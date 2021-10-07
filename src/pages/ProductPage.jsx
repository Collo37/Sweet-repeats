import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";
import classes from "../css/ProductPage.module.css";
import { products } from "../data/products";

const ProductPage = () => {
  const category = useParams();
  const categoryName = category.category;
  const productItems = [];
  products.forEach((product) => {
    if (product.categories.includes(categoryName)) {
      productItems.push(product);
    }
  });
  return (
    <div className={classes.Container}>
      <Navbar />
      <div className={classes.ProductsContainer}>
        <p>{categoryName}</p>
        {productItems.map((product) => {
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
