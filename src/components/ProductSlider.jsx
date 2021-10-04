import { useRef } from "react";
import classes from "../css/ProductSlider.module.css";

const ProductSlider = () => {
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);
  let intervalID;
  let slideIndex = 1;
  const slideImage = (slides) => {
    slides.forEach((item) => {
      if (item.current) {
        item.current.style.transition = "all 1s ease";
        item.current.style.transform = `translate(${slideIndex * -100}%)`;
      } else return;
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
        <div className={classes.Slide} ref={slide1}>
          <div className={classes.ProductSliderImage}></div>
          <div className={classes.ProductSliderDescription}>
            <p className={classes.description}> Chiffon top</p>
            <p className={classes.price}>
              price: <span>1250</span>
            </p>
          </div>
        </div>
        <div className={classes.Slide} ref={slide2}>
          <div
            className={classes.ProductSliderImage}
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/9452971/pexels-photo-9452971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})`,
            }}
          ></div>
          <div className={classes.ProductSliderDescription}>
            <p className={classes.description}> Beige Bralette</p>
            <p className={classes.price}>
              price: <span>1250</span>
            </p>
          </div>
        </div>
        <div className={classes.Slide} ref={slide3}>
          <div
            className={classes.ProductSliderImage}
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/7579995/pexels-photo-7579995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})`,
            }}
          ></div>
          <div className={classes.ProductSliderDescription}>
            <p className={classes.description}> Denim Jacket</p>
            <p className={classes.price}>
              price: <span>1250</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
