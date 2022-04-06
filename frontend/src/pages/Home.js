import React from "react";
import Categories from "../components/Categories";
import Categories2 from "../components/Categories2";
import Deals from "../components/Deals";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Beautycategory from "../components/Beautycategory";
import Beautycategory2 from "../components/Beautycategory2";
import Trendsforher from "../components/Trendsforher";
import "./Home.css";
import Trendsforhim from "../components/Tendsforhim";
import Categories3 from "../components/Categories3";
import Toppicks from "../components/Toppicks";
import Shopbycategories from "../components/Shopbycategory";
import Shopbycategories2 from "../components/Shopbycategory2";
function Home() {
  return (
    <div>
      {/* Calling components */}
      <Deals />
      <Navbar />
      <Slider />

      <span className="abc">DEALS ON TOP BRANDS</span>
      <Categories />
      <Categories2 />
      <Categories3 />

      <span className="abc">TRENDS FOR HER</span>
      <Trendsforher />

      <span className="abc">TRENDS FOR HIM</span>
      <Trendsforhim />

      <span className="abc">TOP PICKS</span>
      <Toppicks />

      <span className="abc">SHOP BY CATEGORIES</span>
      <Shopbycategories />
      <Shopbycategories2 />

      <span className="abc">GROOMING & BEAUTY</span>
      <Beautycategory />
      <Beautycategory2 />
      {/* <Products /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
