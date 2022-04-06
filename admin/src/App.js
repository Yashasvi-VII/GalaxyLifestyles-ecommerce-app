import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./Pages/Home/Home";
// import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./Dark/Dark.scss";
import UserList from "./Pages/Userlist/Userlist";
import User from "./Pages/User/User";
import NewUser from "./Pages/Newuser/newuser";
import ProductList from "./Pages/Productlist/Productlist";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/Newproduct/New";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useContext } from "react";
import { DarkModeContext } from "./Context/DarkModeContext";
function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const { darkMode } = useContext(DarkModeContext);
  //const admin = true;
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* {admin && ( */}
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
          {/* )} */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
