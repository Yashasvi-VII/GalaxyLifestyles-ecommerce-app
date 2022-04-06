import styled from "styled-components";
import { categories } from "../Data";

import CategoryItem from "./Categoriesitems";

const Container = styled.div`
  display: flex;
  position: realtive;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
