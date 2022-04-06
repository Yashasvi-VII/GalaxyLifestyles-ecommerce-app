import styled from "styled-components";
import { categories3 } from "../Data";

import CategoryItem from "./Categoriesitems3";

const Container = styled.div`
  display: flex;
  position: realtive;
  padding: 10px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories3.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
