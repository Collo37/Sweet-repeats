import "./App.css";
import { Route, Switch } from "react-router-dom";
import Categories from "./pages/Categories";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ProductItemPage from "./pages/ProductItemPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route exact path="/products">
          <ProductPage />
        </Route>
        <Route path="/products/productId">
          <ProductItemPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
