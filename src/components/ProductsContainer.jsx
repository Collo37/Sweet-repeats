import { useHistory } from "react-router-dom";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import classes from "../css/ProductsContainer.module.css";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import { publicRequest } from "./axios";
import Spinner from "./Spinner";

const ProductsContainer = (props) => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [tops, setTops] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const getProducts = async () => {
      const newArrivals = await publicRequest.get(
        `/products/?category=${props.newArrivals}`,
        { headers: { category: props.newArrivals } }
      );
      const tops = await publicRequest.get(`products/?category=${props.tops}`, {
        headers: { category: props.tops },
      });
      setNewArrivals(newArrivals.data);
      setTops(tops.data);
      setLoading(false);
    };
    getProducts();
  }, [props.tops, props.newArrivals]);
  const productClickedHandler = (id) => {
    history.push(`/categories/${id}`);
  };
  const productItemClickedHandler = (id) => {
    history.push(`/product/${id}`);
  };

  let newItems;
  let topsItems;
  newItems = !loading ? (
    <div className={classes.ProductRow}>
      <div
        className={classes.ProductsLink}
        onClick={() => productClickedHandler("New Arrivals")}
      >
        <h2 style={{ color: "gray" }}>New Arrivals</h2>
        <p>
          see more <ChevronRightOutlinedIcon />
        </p>
      </div>
      <div className={classes.ProductItems}>
        {newArrivals.map((product) => {
          return (
            <Product
              key={`new_arrivals_${product.productTitle}`}
              details={product}
              clicked={() => productItemClickedHandler(product._id)}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <Spinner />
  );

  topsItems = !loading ? (
    <div className={classes.ProductRow}>
      <div
        className={classes.ProductsLink}
        onClick={() => productClickedHandler("Tops")}
      >
        <h2 style={{ color: "gray" }}>Tops</h2>
        <p>
          see more <ChevronRightOutlinedIcon />
        </p>
      </div>
      <div className={classes.ProductItems}>
        {tops.map((product) => {
          return (
            <Product
              key={`tops_${product.productTitle}`}
              details={product}
              clicked={() => productItemClickedHandler(product._id)}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <Spinner />
  );

  return (
    <div className={classes.ProductsContainer}>
      {newItems}
      {topsItems}
    </div>
  );
};

export default ProductsContainer;
