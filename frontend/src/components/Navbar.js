import React from "react";
import "./Navbar.css";
import Badge from "@mui/material/Badge";
import { fontWeight, styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Container = styled("div")({});
const Wrapper = styled("div")({
  padding: "10px 16px ",
  height: "40px",
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
});
const Left = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  textdecoration: "none",
});
const Language = styled("span")({
  textdecoration: "none",
  cursor: "pointer",
});
const SearchContainer = styled("div")({
  border: `0.5px solid lightgray`,
  display: "flex",
  alignItems: "center",
  marginLeft: 35,
  padding: 5,
});
const Input = styled("input")({ borderStyle: "none" });

const Center = styled("div")({ flex: 1 });

const Right = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  justifyContent: "center",
});
const StyledBadge = styled(Badge)({
  right: -5,
  top: 2,

  padding: "0 4px",
});

const Menuitems = styled("div")({
  fontSize: 14,
  cursor: "pointer",
  marginLeft: 25,
});

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  // container is split into three parts
  //1 language options
  //2 search input
  // 3 login and register links and other styles
  return (
    <Container>
      <Wrapper>
        {/* language options and serach input */}
        <Left>
          <Link to="/">
            <Language>
              {" "}
              <img className="logo" src="https://i.ibb.co/NjRFDf4/G.png" />
            </Language>
          </Link>
        </Left>
        {/* logo */}
        <Center className="center">Men</Center>

        <Center className="center">Women</Center>
        <Center className="center">Kids</Center>
        <Center className="center">Home&Living</Center>
        <Center className="center">Beauty</Center>

        {/* <span>Men</span>
          <span>Women</span>
          <span>Kids</span>
          <span>Home&Living</span>
          <span>Beauty</span>
        </Center> */}
        {/* login and other styled components */}
        <Right>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          <Menuitems>Profile</Menuitems>
          <PermIdentityIcon />
          <Menuitems>Wishlist</Menuitems>
          <FavoriteBorderIcon />
          <Link to="/cart">
            <Menuitems>
              <StyledBadge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </Menuitems>
          </Link>
        </Right>
        {/* <StyledBadge badgeContent={4} color="secondary">
          
        </StyledBadge> */}
      </Wrapper>
    </Container>
  );
}

export default Navbar;
