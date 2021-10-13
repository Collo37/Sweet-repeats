import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Categories from "./pages/Categories";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ProductItemPage from "./pages/ProductItemPage";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const user = false;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route path="/categories/:category">
          <ProductPage />
        </Route>
        <Route path="/product/:id">
          <ProductItemPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/signup">{user ? <Redirect to="/" /> : <SignUp />}</Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
