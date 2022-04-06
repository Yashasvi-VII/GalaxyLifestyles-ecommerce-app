// THIS IS PAGE TO SHOW ALL THE CATEGORIES AND LIST OF PRODUCTS
import styled from "styled-components";
import Deals from "../components/Deals";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation(); // it gives men or women from home/products/men or women
  const selectedcategories = location.pathname.split("/")[2];
  // console.log(location.pathname.split("/")[2]);

  const [filters, setFilters] = useState({}); // when we  change color or style , state will be changed
  const [sort, setSort] = useState("newset");

  // we are going to select select by their names
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  // console.log(filters);
  return (
    <Container>
      <Navbar />

      <Title>{selectedcategories}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newset">Newest</Option>
            <Option value="Increasing">Increasing</Option>
            <Option value="Decreasing">Decreasing</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        selectedcategories={selectedcategories}
        filters={filters}
        sort={sort}
      />
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default ProductList;
