import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { products } from "../data/products";
import classes from "../css/ProductSlider.module.css";

const ProductSlider = () => {
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);
  const history = useHistory();
  const randomProduct = [];
  for (let count = 0; count < 3; count++) {
    let randomId = Math.floor(Math.random() * products.length);
    randomProduct.push(products[randomId]);
  }
  let intervalID;
  let slideIndex = 1;
  const slideClickedHandler = (id) => {
    history.push(`/product/${id}`);
  };
  const slideImage = (slide) => {
    slide.forEach((item) => {
      if (item.current) {
        item.current.style.transition = "all 1s ease";
        item.current.style.transform = `translate(${slideIndex * -100}%)`;
      }
    });
    slideIndex === 2 ? (slideIndex = 0) : (slideIndex += 1);
  };
  document.addEventListener("DOMContentLoaded", () => {
    if (!intervalID) {
      intervalID = setInterval(
        () => slideImage([slide1, slide2, slide3]),
        5000
      );
    }
  });
  return (
    <div className={classes.container}>
      <div className={classes.ProductSlider}>
        {randomProduct.map((product, index) => {
          let ref = null;
          if (index === 0) {
            ref = slide1;
          } else if (index === 1) {
            ref = slide2;
          } else if (index === 2) {
            ref = slide3;
          }
          return (
            <div
              key={index}
              className={classes.Slide}
              onClick={() => slideClickedHandler(product.productTitle)}
              ref={ref}
            >
              <div className={classes.ProductSliderImage}>
                <img src={product.productImages[0]} alt="" />
              </div>
              <div className={classes.ProductSliderDescription}>
                <p className={classes.description}>{product.productTitle}</p>
                <p className={classes.price}>
                  price: <span>{product.price}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
