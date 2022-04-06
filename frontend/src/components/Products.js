import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ selectedcategories, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);

  // when ever category changes run this function(get from api)
  // we will be using axios library
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          selectedcategories
            ? `http://localhost:4000/api/products?category${selectedcategories}`
            : "http://localhost:4000/api/products"
        );
        // console.log("backend result", res);
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [selectedcategories]);

  useEffect(() => {
    selectedcategories &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, selectedcategories, filters]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts(
        (prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt) // a b will compare two items in array
      );
    } else if (sort === "Increasing") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {selectedcategories
        ? filteredproducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 100)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
